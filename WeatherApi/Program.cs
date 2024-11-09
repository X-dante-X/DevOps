using MongoDB.Driver;
using OpenTelemetry.Trace;
using OpenTelemetry.Metrics;

var builder = WebApplication.CreateBuilder(args);

 builder.Services.AddOpenTelemetry()
                    .WithTracing(tracing => tracing
                        .AddAspNetCoreInstrumentation()
                        .AddZipkinExporter(o =>
                        {
                            o.Endpoint = new Uri("http://zipkin:9411/api/v2/spans");
                        }))
                    .WithMetrics(metrics => metrics
                        
                        .AddAspNetCoreInstrumentation()
                        .AddPrometheusExporter());

var connectionUri = Environment.GetEnvironmentVariable("MONGODB_URI") ?? "mongodb://admin:adminpassword@mongodb:27017/weather?authSource=admin";
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


app.UseSwagger();
app.UseSwaggerUI();

app.UseOpenTelemetryPrometheusScrapingEndpoint();

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
})
.WithOpenApi();


app.MapGet("/api/weather", async (WeatherService weatherService) =>
{
    var weatherData = await weatherService.GetWeatherDataAsync();
    return Results.Ok(weatherData);
})
.WithOpenApi();


app.Run();

