import React, { useState } from "react";
import Image from "next/image";
import ellipse from "@/assets/images/ellipse.png";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";
import boldo from "@/assets/images/boldo.svg";
import presto from "@/assets/images/presto.svg";
import heroGraphics from "@/assets/images/heroGraphics.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent py-10 md:py-[60px] px-6 md:px-[100px] flex justify-between items-center z-[1000]">
      <Image 
        src={boldo} 
        width="162" 
        height="42" 
        alt="logo" 
        className="w-[80px] h-auto md:w-[162px]"
      />

      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="flex flex-col space-y-1 w-6 h-6">
          <div className="w-full h-[2px] bg-black"></div>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="w-full h-[2px] bg-black"></div>
        </div>
      </button>

    
      <div className={`
        fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:static md:transform-none md:bg-transparent md:block
      `}>
        <ul className={`
          flex flex-col items-center justify-center h-full space-y-6
          md:flex-row md:space-y-0 md:space-x-10 text-black font-medium
        `}>
          <li className="hover:text-gray-500 cursor-pointer">
            <Typography 
              className="text-black hover:text-[#65E4A3] font-semibold" 
              variant="body"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Typography>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Typography 
              className="text-black hover:text-[#65E4A3] font-semibold" 
              variant="body"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Typography>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Typography 
              className="text-black hover:text-[#65E4A3] font-semibold" 
              variant="body"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Typography>
          </li>
          <li>
            <Button variant="outline" className="text-[16px] px-10 leading-none">
              Log in
            </Button>
          </li>
          <li className="md:hidden">
            <button 
              className="text-black mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Close
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="relative bg-white w-full h-screen flex flex-col items-center justify-center px-6 md:px-[120px] overflow-hidden">
      <div className="mb-32 md:mb-0">
      <Navbar />
      </div>
      <Image
        src={ellipse}
        alt="Decorative Ellipse"
        className="absolute top-0 right-0 w-[150px] md:w-[400px] lg:w-[650px] object-cover z-10"
        priority
      />

      <div className="flex flex-col md:flex-row justify-between w-full z-10 gap-x-10 mt-10">
        <div className="flex flex-col mt-14 max-w-[500px] md:max-w-[600px]">
          <Typography variant="heading" className="text-[#000000] mb-10 text-center md:text-left">
            Save time by building fast with Boldo Template
          </Typography>
          <Typography variant="body" className="text-[#777777] mb-[70px] text-center md:text-left">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </Typography>
          <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
            <Button variant="primary" className="text-[16px] px-12 py-4 leading-none">
              Buy template
            </Button>
            <Button variant="outline" className="text-[16px] px-12 py-4 leading-none">
              Explore
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0 mt-10 md:mt-0 flex mb-20 md:mb-0 justify-center">
          <Image src={heroGraphics} width={"550"} height={"full"} alt="logo" />
        </div>
      </div>

      <div className="w-full overflow-hidden mt-20">
        <div className="flex animate-marquee space-x-10">
          {[...Array(6)].map((_, index) => (
            <React.Fragment key={index}>
              <Image src={boldo} width="162px" height="42px" alt="logo" />
              <Image src={presto} width="162px" height="42px" alt="logo" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;