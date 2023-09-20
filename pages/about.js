import React from 'react';

import Footer from "../components/footer";
import SectionWrapper from "../components/sections/section-wrapper";
import HomeSection from "../components/sections/home-section";
import AboutSection from "../components/sections/about-section";
import WorkSection from "../components/sections/work-section";
import ServicesSection from "../components/sections/services-section";
import ContactSection from "../components/sections/contact-section";

const About = () => {
  return (
    <>
      <SectionWrapper className="section-home">
        <HomeSection />
      </SectionWrapper>
      <SectionWrapper className="section-about">
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper className="section-services">
        <ServicesSection />
      </SectionWrapper>
      <SectionWrapper className="section-work">
        <WorkSection />
      </SectionWrapper>
      <SectionWrapper className="section-contact">
        <ContactSection />
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default About;