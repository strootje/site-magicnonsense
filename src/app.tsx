import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { PlausibleProvider } from "@jsr/strootje__solid-plausible";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { I18nProvider } from "./contexts/I18nContext";
import { SentryRouter } from "./contexts/SentryContext";

export default function App() {
  return (
    <I18nProvider locale="nl">
      <PlausibleProvider apiHost="https://stats.strooware.nl">
        <SentryRouter root={(props) => <Suspense>{props.children}</Suspense>}>
          <FileRoutes />
        </SentryRouter>
      </PlausibleProvider>
    </I18nProvider>
  );
}
