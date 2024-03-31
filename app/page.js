import Image from "next/image";
import Hero from "./ui/home/hero";
import Projects from "./ui/home/projects";
import BlogCard from "./ui/home/blog-cards";

export default function Home() {
  console.log('I run on server')
  return (
    <>
    <Hero/>
    <Projects />
    <BlogCard/>
    
    

    </>

  );
}
