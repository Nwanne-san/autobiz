"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { FEATURES_DATA, VENDOR_LOGOS, SUBSCRIPTION_OPTIONS } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const featureSectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightPanelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    rightPanelsRef.current.forEach((panel, index) => {
      if (!panel) return;
      gsap.set(panel, {
        opacity: index === 0 ? 1 : 0,
        y: index === 0 ? 0 : 50,
      });
    });

    featureSectionsRef.current.forEach((section, index) => {
      if (!section || !rightPanelsRef.current[index]) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          rightPanelsRef.current.forEach((panel, i) => {
            if (i !== index) {
              gsap.to(panel, {
                opacity: 0,
                y: i < index ? -50 : 50,
                duration: 0.3,
                ease: "power2.in",
              });
            }
          });

          gsap.to(rightPanelsRef.current[index], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.2,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          rightPanelsRef.current.forEach((panel, i) => {
            if (i !== index) {
              gsap.to(panel, {
                opacity: 0,
                y: i < index ? -50 : 50,
                duration: 0.3,
                ease: "power2.in",
              });
            }
          });

          gsap.to(rightPanelsRef.current[index], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.2,
            ease: "power2.out",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="relative">
      {isMobile ? (
        <div className="bg-[#2F414A]">
          {FEATURES_DATA.map((feature, index) => (
            <div key={feature.id}>
              <div className="h-[70vh] flex flex-col justify-center px-8 text-white">
                <Image
                  src={`${feature.image}`}
                  alt="Icon"
                  width={56}
                  height={56}
                  className="mb-3"
                />
                <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
                <p className="text-gray-300">{feature.description}</p>
              </div>

              <div className="h-[70vh] bg-gray-100 px-8">
                {index === 0 && (
                  <div className="h-full flex flex-col justify-center">
                    <div className="grid grid-cols-3 gap-4 place-items-center">
                      {VENDOR_LOGOS.map((logo) => (
                        <div
                          key={logo.id}
                          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm"
                        >
                          <span className="font-medium text-sm">
                            {logo.name}
                          </span>
                        </div>
                      ))}
                      <div className="col-span-3 mt-4">
                        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                          <span className="text-green-600 font-bold">
                            Autobiz
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="h-full flex flex-col justify-center space-y-4">
                    {SUBSCRIPTION_OPTIONS.map((option) => (
                      <div key={option.id} className="bg-white rounded-lg p-4">
                        <p className="text-sm mb-2">Add Feature</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                            +
                          </div>
                          <span className="font-medium">{option.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {index === 2 && (
                  <div className="h-full flex flex-col justify-center space-y-4">
                    {[
                      { name: "Pricing Plan-1", price: "7,000.00" },
                      { name: "Pricing Plan-3", price: "10,000.00" },
                      { name: "Pricing Plan-2", price: "5,000.00" },
                    ].map((plan, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-6 border border-dashed border-blue-200"
                      >
                        <h3 className="font-medium mb-1">{plan.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">
                          Special pricing plan-premium
                        </p>
                        <p className="font-bold">₦{plan.price}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <div className="bg-[#2F414A] text-white">
            {FEATURES_DATA.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  featureSectionsRef.current[index] = el;
                }}
                className="h-screen flex items-center p-16"
              >
                <div className="max-w-lg mx-auto">
                  <Image
                    src={`${feature.image}`}
                    alt="Icon"
                    width={56}
                    height={56}
                    className="mb-3"
                  />
                  <h2 className="text-2xl font-semibold mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100">
            <div
              ref={(el) => {
                rightPanelsRef.current[0] = el;
              }}
              className="h-screen flex items-center justify-center p-16"
            >
              <div className="relative w-[400px] h-[400px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">Autobiz</span>
                </div>
                {VENDOR_LOGOS.map((logo, i) => {
                  const angle =
                    i * (360 / VENDOR_LOGOS.length) * (Math.PI / 180);
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={logo.id}
                      className="absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <span className="font-medium text-sm">{logo.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              ref={(el) => {
                rightPanelsRef.current[1] = el;
              }}
              className="h-screen flex items-center justify-center p-16"
            >
              <div className="space-y-6 w-full max-w-md">
                {SUBSCRIPTION_OPTIONS.map((option) => (
                  <div key={option.id} className="bg-white rounded-lg p-4">
                    <p className="text-sm mb-2">Add Feature</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        +
                      </div>
                      <span className="font-medium">{option.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Plans Panel */}
            <div
              ref={(el) => {
                rightPanelsRef.current[2] = el;
              }}
              className="h-screen flex items-center justify-center p-16"
            >
              <div className="space-y-6 w-full max-w-md">
                {[
                  { name: "Pricing Plan-1", price: "7,000.00" },
                  { name: "Pricing Plan-3", price: "10,000.00" },
                  { name: "Pricing Plan-2", price: "5,000.00" },
                ].map((plan, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-dashed border-blue-200"
                  >
                    <h3 className="font-medium mb-1">{plan.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Special pricing plan-premium
                    </p>
                    <p className="font-bold">₦{plan.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
