import React from "react";
import Head from "next/head";

import Footer from "../components/footer";
import SectionWrapper from "../components/sections/section-wrapper";
import HomeSection from "../components/sections/home-section";
import AboutSection from "../components/sections/about-section";
import WorkSection from "../components/sections/work-section";
import ServicesSection from "../components/sections/services-section";
import ContactSection from "../components/sections/contact-section";

const Services = (props) => {
  return (
    <>
      <Head>
        <title>
          Services We Provide | Jellybox Studio | Just A Cute Lil Indie
          Animation Studio
        </title>
      </Head>
      <SectionWrapper className="section-home">
        <HomeSection mainSection={false} />
      </SectionWrapper>
      <SectionWrapper className="section-about">
        <AboutSection pages={props.pages} mainSection={false} />
      </SectionWrapper>
      <SectionWrapper className="section-services">
        <ServicesSection pages={props.pages} mainSection={true} />
      </SectionWrapper>
      <SectionWrapper className="section-work">
        <WorkSection
          pages={props.pages}
          work={props.work}
          mainSection={false}
        />
      </SectionWrapper>
      <SectionWrapper className="section-contact">
        <ContactSection mainSection={false} />
      </SectionWrapper>
      <Footer socials={props.socials} />
    </>
  );
};

export default Services;
