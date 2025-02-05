import React from "react";
import { Typography } from "./ui/typography";
import boldo from "@/assets/images/boldo.svg";
import Image from "next/image";

const footerData = {
  sections: [
    {
      title: "Landings",
      links: ["Home", "Products", "Services"]
    },
    {
      title: "Company",
      links: ["Home", "Careers", "Services"]
    },
    {
      title: "Resources",
      links: ["Blog", "Products", "Services"]
    }
  ]
};

const Footer = () => {
  return (
    <div className="py-12 sm:py-6 md:py-[120px] px-8 sm:px-6 md:px-[100px] mb-[30px] bg-white">
      <div className="flex flex-col md:flex-row md:space-x-32">
        {/* Logo Section */}
        <div className="max-w-xs mb-16 sm:mb-12 md:mb-0 mr-0 sm:mr-20"> 
          <Image src={boldo} width="162" height="42" alt="logo" className="mx-auto md:mx-0" />
          <Typography variant="body" className="mt-10 text-[#777777] text-center md:text-left">
            Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
          </Typography>
          <Typography variant="body" className="mt-10 text-[#777777] text-center md:text-left">
            All rights reserved.
          </Typography>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-10 flex-1">
          {footerData.sections.map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <p className="text-black text-[20px] font-bold mb-8 sm:mb-10">
                {section.title}
              </p>
              <ul className="space-y-8 sm:space-y-10">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href=""
                      className="text-[#777777] hover:text-[#0A2640] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;