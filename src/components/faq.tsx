"use client";

import { useEffect, useRef, useState } from "react";
import { FAQ_DATA } from "@/constants";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    answerRefs.current = answerRefs.current.slice(0, FAQ_DATA.length);
  }, []);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      const answerElement = answerRefs.current[index];
      if (answerElement) {
        gsap.to(answerElement, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => setOpenIndex(null),
        });
      } else {
        setOpenIndex(null);
      }
    } else {
      if (openIndex !== null) {
        const prevElement = answerRefs.current[openIndex];
        if (prevElement) {
          gsap.to(prevElement, {
            height: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          });
        }
      }

      setOpenIndex(index);

      setTimeout(
        () => {
          const answerElement = answerRefs.current[index];
          if (answerElement) {
            gsap.set(answerElement, { height: "auto", opacity: 1 });
            const height = answerElement.offsetHeight;
            gsap.fromTo(
              answerElement,
              { height: 0, opacity: 0 },
              {
                height: height,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
              }
            );
          }
        },
        openIndex !== null ? 200 : 0
      );
    }
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

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

    const faqItems = faqRef.current?.querySelectorAll(".faq-item");

    if (faqItems) {
      tl.fromTo(
        faqItems,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-8 md:py-20 bg-background-2"
    >
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-2/3 h-full">
            <div
              ref={headingRef}
              className="pb-8 border-b border-gray-1"
              style={!isMobile ? { opacity: 0 } : {}}
            >
              <h2 className="text-[32px] leading-[52px] font-medium text-secondary max-w-md">
                Most Commonly Asked Questions
              </h2>
            </div>

            <div ref={faqRef} className="space-y-4">
              {FAQ_DATA.map((faq, index) => (
                <div
                  key={faq.id}
                  className="faq-item border-b border-gray-1"
                  style={!isMobile ? { opacity: 0 } : {}}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left py-8 bg-transparent"
                  >
                    <span className="font-semibold text-lg md:text-base md:font-medium text-secondary">
                      {faq.question}
                    </span>
                    <div
                      className="transition-transform duration-300"
                      style={{
                        transform:
                          openIndex === index ? "rotate(0deg)" : "rotate(0deg)",
                      }}
                    >
                      {openIndex === index ? (
                        <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  <div
                    ref={(el) => (answerRefs.current[index] = el)}
                    className="overflow-hidden"
                    style={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="p-2 bg-transparent">
                      <p className="text-secondary/70">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative block">
            <Image
              src="/images/faq.svg"
              alt="Customer support"
              width={400}
              height={320}
              className="rounded-xl object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
