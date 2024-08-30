import { type Flatten, flatten, translator } from "@solid-primitives/i18n";
import { type ParentProps, createContext, createMemo, useContext } from "solid-js";
import { default as nl } from "~/locales/nl.json";

type LocaleDict = typeof nl;

const dicts = {
  nl,
} as const;

type Locale = keyof typeof dicts;

const I18nContext = createContext<Flatten<LocaleDict>>(flatten(dicts.nl));

type I18nProviderProps = ParentProps & {
  locale: Locale;
};

export const I18nProvider = ({ children, locale }: I18nProviderProps) => {
  const localeDict = createMemo(() => flatten(dicts[locale]));
  return <I18nContext.Provider value={localeDict()}>{children}</I18nContext.Provider>;
};

export const useTranslator = () => translator(() => useContext(I18nContext));
