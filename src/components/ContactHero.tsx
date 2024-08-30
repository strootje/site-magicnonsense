import horsesOrig from "~/assets/images/horses.jpg?w=200;350;750&as=srcset&imagetools";
import horsesAvif from "~/assets/images/horses.jpg?w=200;350;750&f=avif&as=srcset&imagetools";
import horsesWebp from "~/assets/images/horses.jpg?w=200;350;750&f=webp&as=srcset&imagetools";
import { useTranslator } from "~/contexts/I18nContext";

export const ContactHero = () => {
  const t = useTranslator();

  return (
    <div class="relative flex items-center justify-center overflow-hidden">
      <div class="m-14 max-w-[690px] rounded bg-primary bg-opacity-80 p-24 font-title text-size-5xl shadow-xl">{t("pages.contact.hero.text")}</div>

      <picture class="-z-1 absolute h-full">
        <source srcset={horsesAvif} type="image/avif" />
        <source srcset={horsesWebp} type="image/webp" />
        <img class="h-full w-full object-cover object-c" srcset={horsesOrig} alt={t("pages.contact.hero.image-alt")} />
      </picture>
    </div>
  );
};
