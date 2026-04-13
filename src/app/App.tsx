import { Hero } from './components/hero';
import { About } from './components/about';
import { Rooms } from './components/rooms';
import { Pricing } from './components/pricing';
import { Amenities } from './components/amenities';
import { Atmosphere } from './components/atmosphere';
import { CTASection } from './components/cta-section';
import { Contact } from './components/contact';
import { Navigation } from './components/navigation';
import { Gallery } from './components/gallery';
import { Reviews } from './components/reviews';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navigation />
      <Hero />
      <About />
      <Rooms />
      <Pricing />
      <Amenities />
      <Gallery />
      <Atmosphere />
      <Reviews />
      <CTASection />
      <Contact />
    </div>
  );
}