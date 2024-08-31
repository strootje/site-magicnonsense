import headerOrig from "~/assets/images/header.jpg?w=200;350;750&as=srcset&imagetools";
import headerAvif from "~/assets/images/header.jpg?w=200;350;750&f=avif&as=srcset&imagetools";
import headerWebp from "~/assets/images/header.jpg?w=200;350;750&f=webp&as=srcset&imagetools";
import { useTranslator } from "~/contexts/I18nContext";

export const HeaderHero = () => {
  const t = useTranslator();

  return (
    <div class="relative flex min-h-dvh items-center justify-center overflow-hidden">
      <div class="m-14 max-w-[690px] rounded bg-[#d1cfba8a] bg-opacity-80 p-24 font-title text-size-5xl shadow-xl">{t("pages.home.hero.text")}</div>

      <picture class="-z-1 absolute top-0 right-0 bottom-0 left-0">
        <source srcset={headerAvif} type="image/avif" />
        <source srcset={headerWebp} type="image/webp" />
        <img srcset={headerOrig} class="h-full w-full object-cover object-c" alt={t("pages.home.hero.image-alt")} />
      </picture>
    </div>
  );
};
