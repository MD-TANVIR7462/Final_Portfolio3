import FooterNav from "@/components/navbar/FooterNav";
import About from "@/components/ui/About";
import Blog from "@/components/ui/Blog";
import Contact from "@/components/ui/Contact";
import Education from "@/components/ui/Education";
import Experience from "@/components/ui/Experience";
import { HeroBanner } from "@/components/ui/HeroBanner";
// import HeroArea from "@/components/ui/HeroArea";
import MySkills from "@/components/ui/MySkills";
import Portfolio from "@/components/ui/Portfolio";

export default function Home() {
  return (
    <div className="text-default-100">
      <HeroBanner />
      <Experience />
      <About />
      <Education />
      <MySkills />
      <Portfolio />
      <Blog />
      <Contact />
      <div className="fixed bottom-3 flex justify-center w-full z-50">
        <FooterNav />
      </div>
    </div>
  );
}
