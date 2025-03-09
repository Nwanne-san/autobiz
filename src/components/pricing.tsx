"use client";

import { useEffect, useRef } from "react";
import { PRICING_PLANS } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      headingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    const cards = cardsRef.current?.querySelectorAll(".pricing-card");

    if (cards) {
      tl.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-8 md:py-20 bg-background-2"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headingRef} className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[32px] md:leading-[52px] font-medium px-3 md:px-0 text-primary mb-4">
            Scalable Pricing to Grow with Your Business
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card bg-white p-6 rounded-[10px] shadow-md border ${
                plan.popular ? "border-deepBlue border-2" : "border-gray-1"
              }`}
            >
              {plan.popular && (
                <div className="bg-transparent text-deepBlue text-center py-1 px-4 rounded-full text-sm font-medium mb-4 w-fit mx-auto">
                  BEST VALUE
                </div>
              )}
              <div className="bg-offWhite space-y-4 p-4 mb-4 rounded">
                <h3 className="text-base font-semibold text- mb-2">
                  {plan.name}
                </h3>

                <div className="text- bg-offWhite mb-6">
                  <span className="text-[32px] leading-[52px] font-semibold">
                    {plan.price} {plan.currency}
                  </span>
                </div>
              </div>

              <button
                className={` bg-deepBlue text-white py-2 rounded-md
                 ${plan.popular ? "default w-full mb-6" : "w-full mb-6 outline"}
                `}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <Image
                      src="/images/pointer.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <span className="text-sm text-secondary/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
