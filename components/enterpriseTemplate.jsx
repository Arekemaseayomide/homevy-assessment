import React, { useState } from "react";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";
import ellipse2 from "@/assets/images/ellipse2.png";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnterpriseTemprise = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      toast.success("Your email has been submitted!", {
        position: "top-right",
        autoClose: 3000,
      });
      setEmail("");
    } else {
      toast.error("Please provide a valid email.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="relative bg-[#0A2640] rounded-[12px] mb-6 md:mb-[84px] flex flex-col items-center justify-center mx-4 sm:mx-[100px] px-4 py-12 sm:px-[120px] sm:py-[120px] overflow-hidden">
      <Image
        src={ellipse2}
        alt="Decorative Ellipse"
        className="absolute top-0 right-0 w-[100px] sm:w-[400px] lg:w-[750px] object-cover z-10"
        priority
      />
      <Typography
        variant="heading"
        className="text-center mb-8 sm:mb-12 max-w-[720px] z-[1000] md:text-[48px] sm:text-4xl px-4"
      >
        An enterprise template to ramp up your company website
      </Typography>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-[600px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="bg-white flex-1 placeholder:text-black text-black py-3 px-6 rounded-[30px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Button 
          variant="green" 
          className="w-full sm:w-[180px] text-[16px] py-6 sm:py-3"
          onClick={handleSubmit}
        >
          Start now
        </Button>
      </div>
    </div>
  );
};

export default EnterpriseTemprise;