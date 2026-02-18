import Hero from '@/components/Hero';
import Features from '@/components/Features';
import QuoteMarquee from '@/components/shared/QuoteMarquee';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteMarquee />
      <Features />
      <Testimonials />
      <FAQSection />
    </>
  );
}
