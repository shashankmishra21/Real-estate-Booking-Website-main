import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-branding">
        <img src="logofooter.png" alt="EstateEssentials Logo" className="footer-logo" />
        {/* <h2>EstateEssentials</h2>  */}
        <p>Discover your dream property with EstateEssentials - Your trusted partner in real estate.</p>
      </div>
      <div className="footer-social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://x.com/mishrashashank_?t=CmPo-Ey3gxwW3j4iDQCA1Q&s=09" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/mishrashashank21?utm_source=qr&igsh=OXAyMWM2MzNmcHYy" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/shashank-mishra-05590b26b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 EstateEssentials. All rights reserved.</p>
      </div>
    </footer>
  );





  // return (
  //   <div className="f-wrapper">
  //     <div className="paddings innerWidth flexCenter f-container">
  //       {/* left side */}
  //       <div className="flexColStart f-left">
  //         <img src="./logofooter.png" alt="" width={120} />
  //         <span className="text-black">
  //         Discover your dream property with EstateEssentials <br />
  //         Your trusted partner in real estate.
  //         </span>
  //       </div>

  //       <div className="flexColStart f-right">
  //         {/* <span className="primaryText">Information</span> */}
  //         <span className="text-black">Mig 20 St No.10B
  //         Mukut Nagar <br/> 
  //         Durg, 491001, <br/>
  //         Chhattisgarh, India</span>
  //         {/* <div className="flexCenter f-menu">
  //           <span>Property</span>
  //           <span>Services</span>
  //           <span>Product</span>
  //           <span>About Us</span>
  //         </div> */}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Footer;
