import { AboutUs } from "~/components/AboutUs";
import { AgendaWidget } from "~/components/AgendaWidget";
import { Footer } from "~/components/Footer";
import { HeaderHero } from "~/components/HeaderHero";
import { HeaderNav } from "~/components/HeaderNav";
import { Sections } from "~/components/Sections";
import { Socials } from "~/components/Socials";
import { useTranslator } from "~/contexts/I18nContext";

export default function HomePage() {
  const t = useTranslator();

  return (
    <main class="flex flex-col gap-12 font-other">
      <header>
        <HeaderNav />
        <HeaderHero />
      </header>

      <Socials />
      <AgendaWidget />
      <Sections />
      <AboutUs />

      <Footer />
    </main>
  );
}
