import { Footer, Navbar } from "../components";
import { About, Skills, Projects, Hero } from "../sections";

const Page = () => (
  <div className="bg-primary overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
    </div>
    <div className="relative">
      <Projects />
    </div>
    <Footer />
  </div>
);

export default Page;
