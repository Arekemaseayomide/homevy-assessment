"use client";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeroSection = dynamic(() => import("@/components/heroSection"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-100"></div>
});

const OurServices = dynamic(() => import("@/components/ourServices"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
});

const Connect = dynamic(() => import("@/components/connect"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
});

const Enterprise = dynamic(() => import("@/components/enterprise"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
});

const OurBlog = dynamic(() => import("@/components/ourBlog"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
});

const OurBlog2 = dynamic(() => import("@/components/ourBlog2"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
});

const EnterpriseTemprise = dynamic(() => import("@/components/enterpriseTemplate"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100"></div>
});

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100"></div>
});

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="">
      <ToastContainer />
      
      <HeroSection />
      
      <AnimatedSection>
        <OurServices />
      </AnimatedSection>
      
      <AnimatedSection>
        <Connect />
      </AnimatedSection>
      
      <AnimatedSection>
        <Enterprise />
      </AnimatedSection>
      
      <AnimatedSection>
        <OurBlog />
      </AnimatedSection>
      
      <AnimatedSection>
        <OurBlog2 />
      </AnimatedSection>
      
      <AnimatedSection>
        <EnterpriseTemprise />
      </AnimatedSection>
      
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
}