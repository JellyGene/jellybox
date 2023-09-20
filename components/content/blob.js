import React from 'react';

const Blob = ({ children, className, idNum, title }) => {
  return (
    <div className={ `blob blob-${ idNum ?? 'normal' } ${className}` }>
      <h3>{title}</h3>
      { children }
    </div>
  );
};

export default Blob;