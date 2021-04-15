
import React from "react";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div>
      <footer>
        <SocialIcon url="https://www.linkedin.com/in/angelankao/" id="footer-spacing" />
        <SocialIcon url="https://github.com" network="github" bgColor="#ffdab9"/>
      </footer>
    </div>
  );
}
export default Footer;