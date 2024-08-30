import { For } from "solid-js";
import { useTranslator } from "~/contexts/I18nContext";

export const Sections = () => {
  const t = useTranslator();

  return (
    <div class="flex flex-col gap-2">
      <For each={["vision", "workshops", "retrait"] as const}>
        {(key) => (
          <section class="wrapper min-h-[150px] p-2 sm:flex">
            <header class="bg-secondary p-4 font-title text-4xl sm:min-w-1/3">
              <h3 class="p-4">{t(`pages.home.sections.${key}.title.text`)}</h3>
            </header>

            <div class="bg-primary p-6">{t(`pages.home.sections.${key}.content.text`)}</div>
          </section>
        )}
      </For>
    </div>
  );
};
