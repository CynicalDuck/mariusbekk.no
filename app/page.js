import { Footer, Navbar } from "../components";
import { About, Skills, Projects, Hero } from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Skills />
    </div>
    <div className="relative">
      <Projects />
    </div>
    <Footer />
  </div>
);

export default Page;
