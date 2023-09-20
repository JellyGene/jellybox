import React from 'react';

const Footer = ({ children }) => {

  const socialGroup = {
    twitter: {
      icon: "",
      link:"http://google.com"
    },
    instagram: {
      icon: "",
      link:"http://google.com"
    },
    youtube: {
      icon: "",
      link:"http://google.com"
    },
    discord: {
      icon: "",
      link:"http://google.com"
    },
    tiktok: {
      icon: "",
      link:"http://google.com"
    }
  };

  return (
    <footer className="section fp-auto-height">
      <div>
        <ul>
          <li></li>
        </ul>
        <div>
          <small>&copy; JellyBox 2023</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;