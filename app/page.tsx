import Image from "next/image";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
export default function Home() {
  return (
    <>
      <Heading/>
      <Hero/>
      <About/>
      <Navbar/>
    </>
  );
}
