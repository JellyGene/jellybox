import React from 'react';

const SectionWrapper = ({ children, className }) => {
  return (
    <section className={`section ${className}`}>
      <div className="section-wrapper">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;