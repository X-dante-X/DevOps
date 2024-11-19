import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
// import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
// import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
// import { registerInstrumentations } from '@opentelemetry/instrumentation';
// import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
// import { UserInteractionInstrumentation } from '@opentelemetry/instrumentation-user-interaction';
// import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
// const provider = new WebTracerProvider();

// const zipkinExporter = new ZipkinExporter({});
// provider.addSpanProcessor(new SimpleSpanProcessor(zipkinExporter));

// provider.register();
// registerInstrumentations({
//   instrumentations: [
//     new DocumentLoadInstrumentation(),
//     new UserInteractionInstrumentation(),
//     new XMLHttpRequestInstrumentation(),
//   ],
// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
