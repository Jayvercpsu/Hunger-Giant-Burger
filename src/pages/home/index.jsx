import { useRef } from "react";
import Layout from "../../components/layouts/Layout";
import HeroSection from "../../components/home/HeroSection";
import AboutSection from "../../components/home/AboutSection";
import VisionMissionSection from "../../components/home/VisionMissionSection";
import MenuSection from "../../components/home/MenuSection";
import PromotionSection from "../../components/home/PromotionSection";
import FranchisingSection from "../../components/home/FranchisingSection";
import FaqSection from "../../components/home/FaqSection";
import ContactSection from "../../components/home/ContactSection";
import "../../styles/HomeStyle.css";

function Home() {
  const aboutRef = useRef(null);
  const visionMissionRef = useRef(null);
  const menuRef = useRef(null);
  const franchisingRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Layout
      aboutRef={aboutRef}
      visionMissionRef={visionMissionRef}
      menuRef={menuRef}
      franchisingRef={franchisingRef}
      faqRef={faqRef}
      contactRef={contactRef}
    >
      <HeroSection />
      <AboutSection ref={aboutRef} />
      <VisionMissionSection ref={visionMissionRef} />
      <MenuSection ref={menuRef} />
      <PromotionSection />
      <FranchisingSection ref={franchisingRef} />
      <FaqSection ref={faqRef} />
      <ContactSection ref={contactRef} />
    </Layout>
  );
}

export default Home;