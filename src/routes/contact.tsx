import { submitContactAction } from "~/api/server";
import { ContactHero } from "~/components/ContactHero";
import { Footer } from "~/components/Footer";
import { HeaderNav } from "~/components/HeaderNav";
import { useTranslator } from "~/contexts/I18nContext";

export default function ContactPage() {
  const t = useTranslator();

  return (
    <main class="flex flex-col gap-12 font-other">
      <header>
        <HeaderNav />
        <ContactHero />
      </header>

      <section class="mx-auto flex max-w-[680px] flex-col gap-4">
        <div>{t("pages.contact.body.text")}</div>

        <form class="flex flex-col" action={submitContactAction} method="post">
          <div class="flex">
            <input
              type="text"
              class="b-primary b-b-1 hover:b-secondary mx-2 my-4 grow-1 p-2 placeholder-primary"
              name="submitter_name"
              placeholder="Naam *"
              required
            />
            <input
              type="email"
              class="b-primary b-b-1 hover:b-secondary mx-2 my-4 grow-1 p-2 placeholder-primary"
              name="submitter_email"
              placeholder="Email *"
              required
            />
          </div>

          <textarea
            class="b-primary hover:b-secondary b-b-1 mx-2 my-4 p-2 placeholder-primary"
            name="submitter_message"
            placeholder="Type hier je bericht"
            rows={6}
            required
          />

          <button class="w-min rounded bg-primary px-4 py-2 hover:bg-secondary" type="submit">
            <span>{"Verstuur"}</span>
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
