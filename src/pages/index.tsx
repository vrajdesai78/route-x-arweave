import About from "@/components/About";
import Features from "@/components/Features";
import Flow from "@/components/Flow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RouteX</title>
        <meta name="description" content="RouteX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="px-4 md:px-0 mx-auto">
      <Hero />
      <Features />
      <About />
      <Flow />
      </main>
      <Footer />
    </>
  );
}
