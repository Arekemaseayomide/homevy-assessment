import React from 'react'
import { Typography } from './ui/typography'
import featureImage1 from "@/assets/images/feature1.png";
import featureImage2 from "@/assets/images/feature2.png";
import featureImage3 from "@/assets/images/feature3.png";
import view from "@/assets/icons/view.svg";
import chandler from "@/assets/icons/chandler.svg";
import rachel from "@/assets/icons/rachel.svg";
import monica from "@/assets/icons/monica.svg";
import { Button } from "./ui/button";
import Image from 'next/image';

const OurBlog2 = () => {
  return (
    <div>
        <div className="flex md:mb-[100px] px-4 sm:px-6 md:px-[150px] mb-12 flex-col items-center justify-center text-center ">
        <Typography variant="body" className="text-[#777777] mb-3">
          Our Blog
        </Typography>
        <Typography variant="heading" className="text-black max-w-[842px] mb-10 sm:mb-[80px] text-center text-[36px] sm:text-[48px]">
          Value proposition accelerator product management venture
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 mx-auto max-w-[1200px]">
          {/* Blog card 1 */}
          <div className="flex flex-col items-start">
            <div className="w-full mb-6">
              <Image
                src={featureImage1}
                width={270}
                height={200}
                alt="Service 1"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4">
              <p className="text-left text-black text-[16px] font-semibold mb-2 sm:mb-0">
                Category
              </p>
              <p className="text-left text-[16px] text-[#777777] mb-6 sm:mb-0">
                November 22, 2021
              </p>
            </div>
            <Typography variant="body" className="mb-8 text-black sm:mb-12 text-left text-[20px]">
              Pitch termsheet backing validation focus release.
            </Typography>
            <div className="flex items-center gap-4">
              <Image
                src={chandler}
                width={50}
                height={50}
                alt="Harry Potter"
                className="rounded-full"
              />
              <div>
                <Typography variant="subheading" className="text-black text-[16px]">
                  Chandler Bing
                </Typography>
              </div>
            </div>
          </div>

          {/* Blog card 2 */}
          <div className="flex flex-col items-start">
            <div className="w-full mb-6">
              <Image
                src={featureImage2}
                width={270}
                height={200}
                alt="Service 2"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4">
              <p className="text-left text-black text-[16px] font-semibold mb-2 sm:mb-0">
                Category
              </p>
              <p className="text-left text-[16px] text-[#777777] mb-6 sm:mb-0">
                November 22, 2021
              </p>
            </div>
            <Typography variant="body" className="mb-8 text-black sm:mb-10 text-left text-[20px]">
              Seed round direct mailing non-disclosure agreement graphical user interface rockstar.
            </Typography>
            <div className="flex items-center gap-4">
              <Image
                src={rachel}
                width={50}
                height={50}
                alt="Rachel Green"
                className="rounded-full"
              />
              <div>
                <Typography variant="subheading" className="text-black text-[16px]">
                  Rachel Green
                </Typography>
              </div>
            </div>
          </div>

          {/* Blog card 3 */}
          <div className="flex flex-col items-start">
            <div className="w-full mb-6">
              <Image
                src={featureImage3}
                width={270}
                height={200}
                alt="Service 3"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4">
              <p className="text-left text-black text-[16px] font-semibold mb-2 sm:mb-0">
                Category
              </p>
              <p className="text-left text-[16px] text-[#777777] mb-6 sm:mb-0">
                November 22, 2021
              </p>
            </div>
            <Typography variant="body" className="mb-8 text-black sm:mb-10 text-left text-[20px]">
              Beta prototype sales iPad gen-z marketing network effects value proposition.
            </Typography>
            <div className="flex items-center gap-4">
              <Image
                src={monica}
                width={50}
                height={50}
                alt="Monica Geller"
                className="rounded-full"
              />
              <div>
                <Typography variant="subheading" className="text-black text-[16px]">
                  Monica Geller
                </Typography>
              </div>
            </div>
          </div>
        </div>

<div>
        <Button variant="outline" className="mt-12 sm:mt-20 px-8 sm:px-10 font-semibold w-full sm:w-auto">
          Load more
        </Button>
        </div>
        </div>
    </div>
  )
}

export default OurBlog2;
