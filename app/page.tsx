import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LeaguesCarousel from "@/components/LeaguesCarousel";
import LiveTicker from "@/components/LiveTicker";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ProofWall from "@/components/ProofWall";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Nav />
      <Hero />
      <LeaguesCarousel />
      <LiveTicker />
      <StatsBar />
      <HowItWorks />
      <Features />
      <ProofWall />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
