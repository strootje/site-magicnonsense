import { A } from "@solidjs/router";
import { useTranslator } from "~/contexts/I18nContext";

export const HeaderNav = () => {
  const t = useTranslator();

  return (
    <nav class="mx-auto flex max-w-[1200px] items-baseline justify-between p-8 pb-14">
      <ul class="flex">
        <li class="font-title text-size-4xl">
          <A href="/">{t("site.title")}</A>
        </li>
      </ul>

      <ul class="flex">
        <li>
          <A href="/contact">{t("site.menu.contact")}</A>
        </li>
      </ul>
    </nav>
  );
};
