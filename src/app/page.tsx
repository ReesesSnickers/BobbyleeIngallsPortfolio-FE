import Head from "next/head";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import portfolioData from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Bobbylee Ingalls Portfolio",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{portfolioData.hero.name} | Bobbylee Ingalls Portfolio</title>
        <meta name="description" content={portfolioData.hero.tagline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <Hero data={portfolioData.hero} />
        <Projects projects={portfolioData.projects} />
        <Experience experiences={portfolioData.experience} />
        <Skills skills={portfolioData.skills} />
        <Contact data={portfolioData.contact} />
      </main>
    </>
  );
}
