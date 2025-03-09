"use client";

import { useEffect, useRef } from "react";
import { FOOTER_DATA } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";

export const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mx-auto bg-background-2 py-8 md:py-20 relative z-20">
      <section
        ref={sectionRef}
        className="relative mx-auto overflow-hidden rounded-2xl"
      >
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="relative bg-[#2F414A] rounded-2xl p-16 md:p-24">
            <div
              ref={contentRef}
              className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8"
            >
              <h2 className="text-[32px] leading-[52px] md:text-5xl lg:text-[56px] font-medium text-white  md:leading-[1.5]">
                {FOOTER_DATA.title}
              </h2>

              <button className="inline-flex items-center px-6 py-3 bg-white text-[#2F414A] rounded-lg font-medium transition-all hover:bg-opacity-90 group">
                {FOOTER_DATA.cta}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
