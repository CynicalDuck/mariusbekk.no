import { Footer, Navbar } from "../components";
import {
  About,
  Skills,
  Feedback,
  Projects,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Skills />
    </div>
    <div className="relative">
      <Projects />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;
