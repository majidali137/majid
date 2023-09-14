import React, { useEffect } from "react";
import HomeLayout from "../feacture/home/HomeSection";
import About from "./About";
import Services from "./Services";
import RecentWork from "./RecentWork";
import Client from "./Client";
import Resume from "./Resume";
//import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import BlogSectons from "../feacture/blog/BolgSection";
import Contact from "./Contact";


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HomeLayout />
      <About/>
      <Services />
      <RecentWork />
      <Client />
      <Resume />
      <Testimonials />
      <BlogSectons/>
      <Contact/>
    </>
  );
}
