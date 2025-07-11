import Head from "next/head";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Portfolio from "@/types/portfolio";
import portfolioData from "@/data/portfolio";

interface HomeProps {
  data?: Portfolio;
}

export default function Home({}: HomeProps) {
  return (
    <>
      <Head>
        <title>{portfolioData.hero.name} - Developer Portfolio</title>
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
