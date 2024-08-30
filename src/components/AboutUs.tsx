import portretOrig from "~/assets/images/portret.jpg?w=200;350;750&h=550&as=srcset&imagetools";
import portretAvif from "~/assets/images/portret.jpg?w=200;350;750&h=550&f=avif&as=srcset&imagetools";
import portretWebp from "~/assets/images/portret.jpg?w=200;350;750&h=550&f=webp&as=srcset&imagetools";
import { useTranslator } from "~/contexts/I18nContext";

export const AboutUs = () => {
  const t = useTranslator();

  return (
    <div class="w-full bg-primary">
      <section class="mx-auto flex max-w-[680px] flex-col gap-4 p-8">
        <header class="flex flex-col gap-3 text-center font-title text-5xl">
          <h3>{t("pages.home.about-us.title.text")}</h3>

          <picture class="">
            <source srcset={portretAvif} type="image/avif" />
            <source srcset={portretWebp} type="image/webp" />
            <img srcset={portretOrig} alt={t("pages.home.about-us.alt-text")} />
          </picture>
        </header>

        <div>{t("pages.home.about-us.content.text")}</div>
      </section>
    </div>
  );
};
