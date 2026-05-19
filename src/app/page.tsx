import { About } from "@/components/About";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Portfolio } from "@/components/Portfolio";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Section id="home" scrollable>
        <Hero />
      </Section>

      <Section id="about" scrollable>
        <About />
      </Section>

      <Section id="journey" className="journey-section">
        <Journey />
      </Section>

      <Section id="skills" className="skills-section" scrollable>
        <Skills />
      </Section>

      <Section id="portfolio" className="portfolio-section" scrollable>
        <Portfolio />
      </Section>

      <Section id="certificates" scrollable>
        <Certificates />
      </Section>

      <Section id="contact" className="contact-section" scrollable>
        <Contact />
      </Section>
    </>
  );
}
