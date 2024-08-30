import agendaOrig from "~/assets/images/wilson.jpg?w=200;350;750&as=srcset&imagetools";
import agendaAvif from "~/assets/images/wilson.jpg?w=200;350;750&f=avif&as=srcset&imagetools";
import agendaWebp from "~/assets/images/wilson.jpg?w=200;350;750&f=webp&as=srcset&imagetools";
import { useTranslator } from "~/contexts/I18nContext";

export const AgendaWidget = () => {
  const t = useTranslator();

  return (
    <section class="mx-auto w-[1200px] max-w-full p-2">
      <div class="relative flex items-center justify-center overflow-hidden">
        <div class="m-14 m-2 my-24 rounded bg-primary bg-opacity-80 p-24 shadow-xl">
          <h2 class="font-title text-size-5xl">{t("pages.home.agenda.title.text")}</h2>
          <span>{t("pages.home.agenda.no-items.text")}</span>
        </div>

        <picture class="-z-1 absolute w-full">
          <source srcset={agendaAvif} type="image/avif" />
          <source srcset={agendaWebp} type="image/webp" />
          <img class="w-full object-cover object-c" srcset={agendaOrig} alt={t("pages.home.hero.image-alt")} />
        </picture>
      </div>
    </section>
  );
};
