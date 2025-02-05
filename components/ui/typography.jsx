import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      heading: "font-[Manrope] font-normal text-[30px] md:text-[48px] leading-[56px]",
      heading2: "font-[Manrope] font-normal text-[36px] leading-[44px]",
      body: "font-[OpenSans] font-normal text-[16px] leading-[28px]",
    },
    color: {
      default: "#0A2640",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted",
      black: "text-black",
      white: "text-white",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
  },
});

const Typography = ({
  as: Tag = "p",
  variant,
  color,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <Tag
      className={typographyVariants({ variant, color, size, className })}
      {...props}
    >
      {children}
    </Tag>
  );
};

export { Typography, typographyVariants };
