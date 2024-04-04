import Image from "next/image";
import Hero from "./ui/home/hero";
import Projects from "./ui/home/projects";
import BlogCard from "./ui/home/blog-cards";
import ContactForm from "./ui/home/form";

export default function Home() {
  console.log('I run on server')
  return (
    <>
    <Hero/>
    <Projects />
    <ContactForm />

    
    

    </>

  );
}
