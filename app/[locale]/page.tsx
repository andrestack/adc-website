import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Workshops } from "@/components/workshops";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Workshops />
      </main>
    </>
  );
}
