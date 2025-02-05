import React from "react";
import Image from "next/image";
import blogImage from "@/assets/images/connect3.png";
import { Typography } from "./ui/typography";
import featureImage1 from "@/assets/images/feature1.png";
import featureImage2 from "@/assets/images/feature2.png";
import featureImage3 from "@/assets/images/feature3.png";
import view from "@/assets/icons/view.svg";
import chandler from "@/assets/icons/chandler.svg";
import rachel from "@/assets/icons/rachel.svg";
import monica from "@/assets/icons/monica.svg";
import { Button } from "./ui/button";

const OurBlog = () => {
  return (
    <div className="py-8 sm:py-16 md:pt-[100px] px-4 sm:px-6 md:px-[150px] text-black flex flex-col items-center justify-center">
      <Image
        src={blogImage}
        alt="Our Blog"
        width={1300}
        height={400}
        className="mb-10 sm:mb-20 shadow-lg"
      />

      <div className="flex flex-col sm:flex-row mb-20 sm:mb-[160px] justify-between w-full gap-10 sm:gap-0">
        <Typography variant="heading2" className="max-w-[500px] text-[28px] sm:text-[36px]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </Typography>
        <div className="flex flex-col items-start gap-7 justify-end max-w-[700px]">
          <div className="border-b flex justify-between sm:gap-20 pb-[20px] border-[#C4C4C4] w-full">
            <p className="text-[16px] sm:text-[20px] text-black pr-4">
              We connect our customers with the best?
            </p>
            <Image src={view} alt="Icon 2" className="w-6 h-6 flex-shrink-0" />
          </div>
          <div className="border-b flex justify-between sm:gap-20 pb-[20px] border-[#C4C4C4] w-full">
            <p className="text-[16px] sm:text-[19px] text-black pr-4">
              Android research & development rockstar?
            </p>
            <Image src={view} alt="Icon 2" className="w-6 h-6 flex-shrink-0" />
          </div>
        </div>
      </div>

      
  
    </div>
  );
};

export default OurBlog;