import Aboutus from "./components/Aboutus";
import Blogs from "./components/Blogs";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Ai from "./components/Ai";
import Solutions from "./components/Solutions";
import {
  data,
  imgsrc,
  aboutus,
  navbtn,
  hero,
  content,
  faq,
  footer,
  business,
  solutions,
  group,
} from "./components/jsondata";

export default function Home() {
  return (
    <>
      <Navbar data={data} btn={navbtn} />
      <Hero hero={hero} group={group} />
      <Carousel imgsrc={imgsrc} />
      <Aboutus aboutus={aboutus} />
      <Solutions solutions={solutions} />
      <Blogs content={content} />
      <Ai business={business} />
      <FAQ faq={faq} />
      <Footer footer={footer} />
    </>
  );
}
