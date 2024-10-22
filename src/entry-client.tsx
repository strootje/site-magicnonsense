// @refresh reload

import { init as SentryInit } from "@sentry/solidstart";
import { solidRouterBrowserTracingIntegration } from "@sentry/solidstart/solidrouter";
import { StartClient, mount } from "@solidjs/start/client";
import { SentryDsn } from "./consts";

SentryInit({
  environment: "localdev",
  dsn: SentryDsn,
  integrations: [solidRouterBrowserTracingIntegration({})],
  tracesSampleRate: 1.0,
});

mount(() => <StartClient />, document.body);
