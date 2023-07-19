import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import { Inter } from "next/font/google";
import Head from "next/head";
import BottomBar from "../components/BottomBar";
import CTA from "../components/CTA";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Gashirai Masosonore</title>
        <meta name="description" content="Gashirai Maso Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Services />
      <CTA />
      <Projects />
      <Footer />
      <BottomBar />
    </>
  );
}
