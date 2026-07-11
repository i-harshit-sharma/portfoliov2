import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import { ParallaxComponent } from "@/components/parallax";

export default function Home() {
  return (
    <>
      <ParallaxComponent/>
      <Heading/>
      {/*<Hero/>*/}
      {/*<About/>*/}
      {/* <Skills/> */}
      {/*<Work/>*/}
      <Footer/>
      {/*<Navbar/>*/}
    </>
  );
}
