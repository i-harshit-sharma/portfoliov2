import Image from "next/image";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Heading/>
      <Hero/>
      <About/>
      <Work/>
      <Navbar/>
    </>
  );
}
