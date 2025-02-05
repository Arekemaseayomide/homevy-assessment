import React from "react";
import Image from "next/image";
import image1 from "@/assets/images/connect.png";
import image2 from "@/assets/images/connect2.png";
import check from "@/assets/icons/check.svg";
import feather from "@/assets/icons/feather.svg";
import eye from "@/assets/icons/eye.svg";
import sun from "@/assets/icons/sun.svg";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";

const Connect = () => {
  return (
    <div className="bg-white py-16 md:py-[120px] px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1200px] mx-auto">
        {/* Image Top Left */}
        <div className="flex justify-center items-center">
          <Image
            src={image1}
            alt="Connect Image 1"
            className="w-full max-w-[500px] object-cover"
          />
        </div>

        {/* Content Top Right */}
        <div className="flex flex-col justify-center space-y-6">
          <Typography className="text-[#000000]" variant="heading2">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Typography>
          <div className="flex items-start gap-7">
            <Image src={check} alt="Icon 2" className="w-6 h-6" />
            <p className="text-[20px] text-gray-600">
              We connect our customers with the best.
            </p>
          </div>
          <div className="flex items-start gap-7">
            <Image src={check} alt="Icon 2" className="w-6 h-6" />
            <p className="text-[20px] text-gray-600">
              Advisor success customer launch party.
            </p>
          </div>
          <div className="flex items-start gap-7">
            <Image src={check} alt="Icon 2" className="w-6 h-6" />
            <p className="text-[20px] text-gray-600">
              Business-to-consumer long tail.
            </p>
          </div>

          <div>
            <Button variant="primary" className="mt-8 px-10">
              Start now
            </Button>
          </div>
        </div>

        {/* Content Bottom Left */}
        <div className="flex flex-col justify-center space-y-6">
          <Typography className="text-[#000000]" variant="heading2">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Typography>
          <div className="inline-flex bg-[#0A2640] mb-4 py-5 px-4 rounded-[8px] items-start gap-4 shadow-md">
            <Image src={feather} alt="Icon 2" className="w-6 h-6 md:mt-0 mt-4" />
            <p className="text-[18px] font-semibold text-white">
              We connect our customers with the best.
            </p>
          </div>
          <div className="inline-flex bg-[white] mb-4 py-5 px-4 rounded-[8px] items-start gap-4 shadow-md">
            <Image src={eye} alt="Icon 2" className="w-6 h-6 md:mt-0 mt-4" />
            <p className="text-[18px] font-semibold text-black">
              We connect our customers with the best.
            </p>
          </div>
          <div className="inline-flex bg-[white] mb-4 py-5 px-4 rounded-[8px] items-start gap-4 shadow-md">
            <Image src={sun} alt="Icon 2" className="w-6 h-6 md:mt-0 mt-4" />
            <p className="text-[18px] font-semibold text-black">
              We connect our customers with the best.
            </p>
          </div>
        </div>

        {/* Image Bottom Right */}
        <div className="flex justify-center items-center">
          <Image
            src={image2}
            alt="Connect Image 2"
            className="w-full max-w-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;
