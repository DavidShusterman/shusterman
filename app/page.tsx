import Hero from "@/components/Hero";
import FamilyLegacy from "@/components/FamilyLegacy";
import InvestmentPillars from "@/components/InvestmentPillars";
import Philanthropy from "@/components/Philanthropy";
import FounderSection from "@/components/FounderSection";
import ArikSection from "@/components/ArikSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FamilyLegacy />
      <InvestmentPillars />
      <Philanthropy />
      <FounderSection />
      <ArikSection />
      <Footer />
    </main>
  );
}
