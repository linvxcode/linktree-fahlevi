import Footer from "@/common/components/Footer";

import ButtonLink from "./ButtonLink";
import Hero from "./Hero";


const Home = () => {
  return (
    <div className="p-6 mb-2 space-y-6" data-aos="fade-down">
      <Hero />
      <ButtonLink />
      <Footer />
    </div>
  );
};

export default Home;
