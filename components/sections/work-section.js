import React from "react";

import Blob from "../content/blob";
import Drop from "../content/drop";

const WorkSection = () => {
  return (
    <div className="flx column container center">
      <Blob title="Work" idNum="work">
        We love working with a variety of{" "}
        <span className="highlight">production styles</span> and{" "}
        <span className="highlight">mediums</span>! Here is a showcase of our{" "}
        <span className="highlight large">best work</span>.
      </Blob>
      <div className="flx">
        <Drop
          title="Plant Panic"
          poster="/work/planet-panic-poster.png"
          link="https://youtu.be/M5c56viVSbs?si=5pw8DStTdd5p3u1u"
          className="flx-half"
        >
          <p>
            A co-production with Nickelodeon Studios and Studio Yotta, written
            and directed by Jellybox studio founder Gene Goldstein. One of
            Jellybox&apos;s earliest animated projects, but arguably the most
            successful. This 3-minute short spawned a massive fanbase, heaps of
            fan art, and led to a development deal with Nickelodeon.
          </p>
          <p>Mission mission mission yeah!</p>
        </Drop>
        <Drop
          title="Poison Pop"
          poster="/work/poisonpop-poster.png"
          link="https://youtu.be/M5c56viVSbs?si=5pw8DStTdd5p3u1u"
          className="flx-half"
        >
          <p>
            A hybrid live-action/animated music video created for the Los
            Angeles punk band Qbomb, Poison Pop depicts a stylish anime-inspired
            baseball game between the members of the band and an animated crew
            of monstrous Haterz. Jellybox was involved in every stage of
            production, from storyboards and costume design to animation and
            post-production. The entire music video was created in less than six
            months by a small skeleton crew of amazing talent.
          </p>
          <p>
            To date has over 140k views on YouTube, and spawned tons of fan art
            as well as lucrative merchandise for the band.
          </p>
        </Drop>
        <Drop
          title="NOXP"
          poster="/work/noxp-poster.png"
          link="https://youtu.be/M5c56viVSbs?si=5pw8DStTdd5p3u1u"
          className="flx-half"
        >
          <p>
            A series of comedic shorts depicting the lives of a group of RPG
            characters after their epic quest concluded, forcing them back into
            regular lives. NOXP started as a solo endeavor of studio founder
            Gene Goldstein, and has since grown into Jellybox&apos;s first
            internal production, with two teams of animators alternating
            episodes to ensure weekly releases. Since its inception, NOXP has
            found success on all the social media platforms, and has garnered an
            active fanbase.
          </p>
        </Drop>
        <Drop
          title="How To Survive"
          poster="/work/how-to-survive-poster.png"
          link="https://youtu.be/M5c56viVSbs?si=5pw8DStTdd5p3u1u"
          className="flx-half"
        >
          <p>
            &quote;How To Survive The Greatest Emergency In the History Of The
            Planet&quote; was a commissioned project by Michael Rianda, director
            of Mitchells Vs. The Machines, as a promotional video to get people
            to vote during the historic 2020 election. Produced against a tight
            deadline leading up to election day, the entire short was created in
            just under three weeks with a small team of animators from around
            the world.
          </p>
          <p>Trump lost, so clearly the promo worked!</p>
        </Drop>
      </div>
    </div>
  );
};

export default WorkSection;
