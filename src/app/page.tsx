import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Comparison from "@/components/Comparison";
import JournalSection from "@/components/JournalSection";
import FAQSection from "@/components/FAQSection";
import AdvisorSection from "@/components/AdvisorSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-slate-900">
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Comparison />
      <JournalSection />
      <FAQSection />
      <AdvisorSection />
      <ContactFooter />
    </main>
  );
}
