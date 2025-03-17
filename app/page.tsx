import Navbar from "./Components/Navbar";
import Screen from "./Components/Screen";
import AISection from "./Components/FutureAi";
import BannerSec from "./Components/Bannaer";
import Social from "./Components/Social";
import FAQSection from "./Components/QA";
import CTASection from "./Components/CTA";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Screen/>
    <AISection/>
    <BannerSec/>
    <Social/>
    <FAQSection/>
    <CTASection/>
    <Footer/>
     {/* <LandingPage/> */}
    </>
  );
}
