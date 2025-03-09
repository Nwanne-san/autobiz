"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { HERO_DATA, HERO_FEATURES } from "@/constants";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      textRef.current?.querySelectorAll("h1, h2, p, button, .feature-tag"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
      }
    );

    tl.fromTo(
      imageRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-8 pb-16  md:pb-20 spacey-14 overflow-hidden bg-background h-full"
    >
      <div className="container mx-auto px-4 md:mb-5 md:pl-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-secondary">
            Autobiz App
          </Link>

          <nav className="flex items-center space-x-8 bg-foreground px-3 py-2 rounded-xl text-white">
            <button>Get Started</button>
          </nav>
        </div>
      </div>
      <div className=" mx-auto pl-4 md:pl-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between items-center">
          <div
            ref={textRef}
            className="max-w-xl flex flex-col   items-center justify-center md:py-20 pt-12"
          >
            <div className="flex flex-col">
              <h1 className="text-[32px] leading-[52px] md:text-4xl md:text-[56px] md:leading-[84px] font-medium text-secondary md:mb-2">
                {HERO_DATA.title}
              </h1>
              <h2 className="text-[32px] leading-[52px] md:text-4xl md:text-[56px] md:leading-[84px]  font-medium  text-secondary/70 italic mb-4 md:mb-6">
                {HERO_DATA.subtitle}
              </h2>
              <p className="text-secondary/70 text-base font-semibold mb-8">
                {HERO_DATA.description}
              </p>
              <button className="mb-10 group flex items-center w-fit gap-2 bg-[#2C29FF] text-white px-3 py-2 rounded-xl">
                {HERO_DATA.cta}
                <ChevronRight className=" group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div ref={imageRef} className="relative h-full">
            <Image
              src="/images/hero (2).svg"
              alt="Autobiz App Dashboard"
              width={500}
              height={500}
              className="w-auto relative h-full z-10 object-contain"
            />
            <Image
              src="/images/asset.png"
              alt="Autobiz App Dashboard"
              width={400}
              height={500}
              className="w-auto absolute -top-10 -left-10 z-0 h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row flex-nowrap gap-4 md:pl-10 mt-12 md:-mt-14 pl-4 mx-auto">
        {HERO_FEATURES.map((feature, index) => (
          <div
            key={HERO_DATA.description}
            className="feature-tag border border-black xl:text-nowrap rounded-full gap-2 bg-background p-3 text-sm xl:text-base text-secondary flex items-center"
          >
            <Image
              src={`${feature.image}`}
              alt="Icon"
              width={20}
              height={20}
              className=" "
            />
            <span>{feature.features}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
