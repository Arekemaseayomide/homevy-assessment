import React, { useState } from "react";
import Image from "next/image";
import albus from "@/assets/images/albus.svg";
import snape from "@/assets/images/snape.svg";
import harry from "@/assets/images/harry.svg";
import previous from "@/assets/icons/previous.svg";
import next from "@/assets/icons/next.svg";
import { Typography } from "./ui/typography";

const testimonials = [
  {
    text: "Buyer buzz partner network disruptive non-disclosure agreement business",
    name: "Albus Dumbledore",
    role: "Manager @ Hogwarts",
    image: albus,
  },
  {
    text: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    name: "Severus Snape",
    role: "Manager @ Slytherin",
    image: snape,
  },
  {
    text: "Release facebook responsive web design business model canvas seed money monetization.",
    name: "Harry Potter",
    role: "Team Leader @ Gryffindor",
    image: harry,
  },
];

const Essentials = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-[#0A2640] py-8 sm:py-16 md:py-[100px] px-4 sm:px-6 md:px-[150px] text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0 mb-8 sm:mb-12">
        <Typography variant="heading" className="max-w-[700px]">
          An enterprise template to ramp up your company website
        </Typography>
        <div className="flex flex-row gap-4 sm:gap-7 self-end">
          <button onClick={handlePrevious}>
            <Image
              src={previous}
              alt="Previous"
              className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer"
            />
          </button>
          <button onClick={handleNext}>
            <Image
              src={next}
              alt="Next"
              className="w-12 h-12 sm:w-14 sm:h-14 cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Responsive Layout - Shows all by default, scrolls on mobile/tablet */}
      <div
        className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 md:gap-16 no-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`bg-white text-black p-6 sm:p-10 rounded-lg shadow-lg flex-1 min-w-[90%] md:min-w-0 md:h-auto ${
              idx === 1 ? "lg:h-[390px]" : "lg:h-[320px]"
            }`}
          >
            <Typography variant="body" className="mb-6 text-lg sm:text-[24px]">
              "{testimonial.text}"
            </Typography>
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                width={40}
                height={40}
                alt={testimonial.name}
                className="rounded-full sm:w-[50px] sm:h-[50px]"
              />
              <div>
                <Typography
                  variant="subheading"
                  className="text-[14px] sm:text-[16px] font-semibold"
                >
                  {testimonial.name}
                </Typography>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essentials;
