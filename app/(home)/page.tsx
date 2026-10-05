import Hero from "../_sections/Hero";
import Features from "../_sections/Features";
import Community from "../_sections/Community";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
    </main>
  );
}
