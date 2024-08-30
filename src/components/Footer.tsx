import { useTranslator } from "~/contexts/I18nContext";

export const Footer = () => {
  const t = useTranslator();

  return (
    <footer class="text flex flex-col p-8 pt-14 text-gray-500">
      <div class="mx-auto flex w-[1200px] max-w-full flex-col justify-between gap-2 sm:flex-row">
        <section class="flex flex-col">
          <span>{t("site.address.line1")}</span>
          <span>{t("site.address.line2")}</span>
          <span>{t("site.address.line3")}</span>
        </section>

        <section class="flex flex-col">
          <span>{t("site.company.kvk")}</span>
          <span>{t("site.company.btw")}</span>
          <span>{t("site.company.iban")}</span>
        </section>
      </div>

      {/* <a href="https://stats.strooweb.nl/magic-nonsense.com" target="_blank" rel="noreferrer">
          Open Analytics
        </a> */}
    </footer>
  );
};
