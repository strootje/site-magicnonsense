import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Plausible } from "@jsr/strootje__solid-plausible";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { I18nProvider } from "./contexts/I18nContext";
import { Router } from "@solidjs/router";

export default function App() {
  return (
    <I18nProvider locale="nl">
      <Plausible.Provider value={{ apiHost: "https://stats.strooware.nl" }}>
        <Plausible.AutoPageviewTracking />
        <Router root={(props) => <Suspense>{props.children}</Suspense>}>
          <FileRoutes />
        </Router>
      </Plausible.Provider>
    </I18nProvider>
  );
}
