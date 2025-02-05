import React from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[40px] text-[20px] font-bold font-[OpenSans] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-gray-300 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-[#0A2640] text-white px-8 py-3 hover:bg-[#082033] hover:border hover:border-[#0A2640] hover:text-[#0A2640] hover:bg-white",
        green: "bg-[#65E4A3] text-[16px] text-[#0A2640] px-8 md:py-3 py-[10px] hover:text-[#65E4A3] hover:border hover:border-[#65E4A3] hover:bg-[#0A2640]",
        outline:
          "bg-white border-2 border-[#0A2640] text-[#0A2640] py-3 py-3 hover:text-white hover:bg-[#0A2640]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const Button = React.forwardRef(({ className, variant, children, ...props }, ref) => {
  return (
    <button className={`${buttonVariants({ variant })} ${className}`} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
