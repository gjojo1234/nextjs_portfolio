import Head from "next/head";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dataFetching = async () => {
    const resp = await fetch("/api/getData");
    const data = await resp.json();
    setItems(data[0]);
  };
  useEffect(() => {
    dataFetching();
    setIsLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Jozef Gensor</title>
        <meta name="description" content="Portfolio next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <About />
      <Projects projects={items.projects} isLoading={isLoading} />
      <Skills skills={items.skills} isLoading={isLoading} />
      <Contact />
    </>
  );
}
