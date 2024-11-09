using MongoDB.Driver;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

const string connectionUri = "mongodb+srv://yevheniisolomchenko:wtBcfUKsnAY01JNv@weather.aex78.mongodb.net/?retryWrites=true&w=majority&appName=Weather";
var settings = MongoClientSettings.FromConnectionString(connectionUri);
settings.ServerApi = new ServerApi(ServerApiVersion.V1);

builder.Services.AddSingleton<IMongoClient>(new MongoClient(settings));
builder.Services.AddSingleton<WeatherService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");

app.MapPost("/api/generateweather", async (WeatherService weatherService) =>
{
    var summaries = new[] { "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching" };

    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();

    foreach (var weather in forecast)
    {
        await weatherService.SaveWeatherDataAsync(weather);
    }

    return Results.Ok(forecast);
});


app.MapGet("/api/weather", async (WeatherService weatherService) =>
{
    var weatherData = await weatherService.GetWeatherDataAsync();
    return Results.Ok(weatherData);
});


app.Run();

