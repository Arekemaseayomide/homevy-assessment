import React from "react";
import Image from "next/image";
import serviceImage1 from "@/assets/images/category1.png";
import serviceImage2 from "@/assets/images/category2.png";
import serviceImage3 from "@/assets/images/category3.png";
import { Typography } from "./ui/typography";
import ArrowRight from "@/assets/icons/arrowRight.svg";

const OurServices = () => {
  return (
    <div className="bg-[#0A2640] text-white py-10 md:py-[100px] px-6 md:px-[100px]">
      {/* Section Title */}
      <div className="text-center mb-4">
        <Typography variant="body" className="text-[#F1F1F1]">
          Our Services
        </Typography>
      </div>
      <div className="text-center mb-14 max-w-[1000px] mx-auto">
        <Typography variant="heading">
          Handshake infographic mass market crowdfunding iteration.
        </Typography>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-28 mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={serviceImage1}
            width={270}
            height={400}
            alt="Service 1"
            className="w-full mb-3 hover:border-[2px] hover:rounded-[30px] hover:border-white object-cover"
          />
          <p className="mt-4 text-left w-full text-[24px] mb-6 md:mb-10">
            Cool feature title
          </p>
          <div className="inline-flex cursor-pointer">
            <p className="mt-4 text-[20px] font-semibold mb-6 md:mb-10 pb-3 text-white flex items-center hover:border-b-[#65E4A3] border-b border-white">
              Explore page
              <Image
                src={ArrowRight}
                alt="Arrow Right"
                className="ml-5 w-6 h-6"
              />
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Image
            src={serviceImage2}
            width={270}
            height={400}
            alt="Service 2"
            className="w-full mb-3 object-cover hover:border-[2px] hover:rounded-[30px] hover:border-white"
          />
          <p className="mt-4 text-left w-full text-[24px] mb-6 md:mb-10">
            Even cooler feature
          </p>
          <div className="inline-flex cursor-pointer">
            <p className="mt-4 text-[20px] font-semibold mb-6 md:mb-10 pb-3 text-white flex items-center hover:border-b-[#65E4A3] border-b border-white">
              Explore page
              <Image
                src={ArrowRight}
                alt="Arrow Right"
                className="ml-5 w-6 h-6"
              />
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Image
            src={serviceImage3}
            width={270}
            height={400}
            alt="Service 3"
            className="w-full mb-3 hover:border-[2px] hover:rounded-[30px] hover:border-white object-cover"
          />
          <p className="mt-4 text-left w-full text-[24px] mb-6 md:mb-10">
            Cool feature title
          </p>
          <div className="inline-flex cursor-pointer">
            <p className="mt-4 text-[20px] pb-3 font-semibold mb-6 md:mb-10 text-white flex items-center hover:border-b-[#65E4A3] border-b border-white">
              Explore page
              <Image
                src={ArrowRight}
                alt="Arrow Right"
                className="ml-5 w-6 h-6"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
