import React from 'react';

const Drop = ({ children, className, poster, posterAlt, idNum, title, link}) => {
  return (
    <section className={ `drop drop-${ idNum ?? 'normal' } ${className}` }>
      <a className="drop-content" href={link}>
        <header className="drop-title">
          <h3>{ title }</h3>
        </header>
        <div className="drop-body">
          { children }
        </div>
      </a>
      <div className="drop-image">
        <img src={ poster } alt={ posterAlt ?? title } />
      </div>
    </section>
  );
};

export default Drop;