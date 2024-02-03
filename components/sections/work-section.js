import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import BubbleCanvas from "../bubbles-canvas";
import Blob from "../content/blob";
import Drop from "../content/drop";

const WorkSection = ({ pages, work }) => {
  return (
    <>
      <div className="flx column container center above">
        <Blob title="Work" idNum="work" className="push-down">
          We love working with a variety of
          <br />
          <span className="highlight">production styles</span> and{" "}
          <span className="highlight">mediums</span>!<br />
          Here is a showcase of our
          <br />
          <span className="highlight large">best work</span>.
        </Blob>
        <div className="flx around">
          {work.map((job) => {
            return (
              <Drop
                key={job.sys.id}
                title={job.fields.title}
                poster={`https:${job.fields.image.fields.file.url}`}
                link={job.fields.link}
                className="flx-half"
              >
                {documentToReactComponents(job.fields.description)}
              </Drop>
            );
          })}
        </div>
      </div>
      <BubbleCanvas />
    </>
  );
};

export default WorkSection;
