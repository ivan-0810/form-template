import React from 'react';
import SocialIcons from '../SocialIcons';
import "./footer.scss"

const Footer = ({ isReady }) => {
    return (
      <div className="footer" style={isReady ? {opacity:"1", marginTop:"0"}: {opacity:"0", marginTop:"5%"}}>
          <SocialIcons />
          <p>&copy;  Untitled. All rights reserved.</p>
      </div>
    );
  }
  
  export default Footer;