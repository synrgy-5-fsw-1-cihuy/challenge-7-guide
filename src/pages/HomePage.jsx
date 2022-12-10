import Hero from "../parts/Hero";
import Service from "../parts/homepage/Service";
import Testimonial from "../parts/homepage/Testimonial";
import WhyUs from "../parts/homepage/WhyUs";
import Jumbotron from "../parts/homepage/Jumbotron";
import FAQ from "../parts/homepage/FAQ";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Service />
      <WhyUs />
      <Testimonial />
      <Jumbotron />
      <FAQ />
    </>
  );
};

export default HomePage;
