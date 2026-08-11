import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ActivityMarquee from "@/components/ActivityMarquee";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <ActivityMarquee />
      <Header />
      <Hero />
      <Advantages />
      <Portfolio />
      <Pricing />
      <Services />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
