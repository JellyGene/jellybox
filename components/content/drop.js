import React from 'react';

const Drop = ({ children, className, poster, posterAlt, idNum, title}) => {
  return (
    <section className={ `drop drop-${ idNum ?? 'normal' } ${className}` }>
      <div className="drop-content">
        <header className="drop-title">
          <h3>{ title }</h3>
        </header>
        <div className="drop-body">
          { children }
        </div>
      </div>
      <div className="drop-image">
        <img src={ poster } alt={ posterAlt ?? title } />
      </div>
    </section>
  );
};

export default Drop;