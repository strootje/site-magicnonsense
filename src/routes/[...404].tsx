import { ContactHero } from "~/components/ContactHero";
import { Footer } from "~/components/Footer";
import { HeaderNav } from "~/components/HeaderNav";

export default function NotFoundPage() {
  return (
    <main class="flex flex-col gap-12 font-other">
      <header>
        <HeaderNav />
        <ContactHero />
      </header>

      <div>Error 404</div>

      <Footer />
    </main>
  );
}
