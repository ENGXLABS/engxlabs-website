import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import AINativeEnterprise from "@/components/AINativeEnterprise";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Framework from "@/components/Framework";
import WhyENGXLABS from "@/components/WhyENGXLABS";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />
      <Problem />
      <AINativeEnterprise />
      <Services />
      <Solutions />
      <Framework />
      <WhyENGXLABS />
      <Founder />
      <CTA />
      <Footer />
    </main>
  );
}
