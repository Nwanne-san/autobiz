"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ABOUT_DATA } from "@/constants";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top 70%",
  //       end: "bottom 20%",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   tl.fromTo(
  //     textRef.current,
  //     { x: -50, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
  //   ).fromTo(
  //     videoRef.current,
  //     { x: 50, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
  //     "-=0.5"
  //   );

  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-20">
      <div className=" justify-between px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-12 items-center">
          <div ref={textRef} className="max-w-lg">
            <h2 className="text-3xl font-semibold text-secondary mb-6">
              {ABOUT_DATA.title}
            </h2>
            <p className="text-secondary/70 font-normal">
              {ABOUT_DATA.description}
            </p>
          </div>

          <div ref={videoRef} className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/about.svg"
              alt="About Autobiz App"
              width={500}
              height={200}
              className="h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <Play className="h-6 w-6 text-primary fill-current" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
