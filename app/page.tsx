import { Achievements } from "./components/achievements";
import { Biography } from "./components/biography";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Statistics } from "./components/statistics";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-purple-950">
    <Navbar />
    <Hero/>
    <Biography/>
    <Achievements/>
    <Statistics/>
    <Contact/>
    <Footer/>
  </main>
  );
}
