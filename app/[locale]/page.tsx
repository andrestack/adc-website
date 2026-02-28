import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Workshops } from "@/components/workshops";
import { Teachers } from "@/components/teachers";
import { Accommodation } from "@/components/accommodation";
import { Testimonials } from "@/components/testimonials";
import { Location } from "@/components/location";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Workshops />
        <Teachers />
        <Accommodation />
        <Testimonials />
        <Location />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
