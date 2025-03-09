"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/constants";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    const slider = sliderRef.current;
    const wrapper = wrapperRef.current;
    if (!slider || !wrapper) return;

    const totalWidth = slider.scrollWidth;
    const viewWidth = wrapper.offsetWidth;
    const snapWidth = viewWidth / 4;
    const maxX = -(totalWidth - viewWidth);

    const draggable = Draggable.create(slider, {
      type: "x",
      inertia: true,
      bounds: {
        minX: maxX,
        maxX: 0,
      },
      edgeResistance: 0.65,
      onDragStart: () => setIsDragging(true),
      onDragEnd: function () {
        setIsDragging(false);
        const x = this.x;
        const snapX = Math.round(x / snapWidth) * snapWidth;
        gsap.to(slider, {
          x: Math.max(maxX, Math.min(0, snapX)),
          duration: 0.3,
          ease: "power2.out",
        });
      },
    })[0];

    gsap.fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    return () => {
      draggable.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-8 md:py-20 bg-background-2"
    >
      <div className="  px-4 md:px-6">
        <div ref={headingRef} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            What People Say About Us
          </h2>
        </div>

        <div ref={wrapperRef} className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex cursor-grab active:cursor-grabbing"
            onClick={handleClick}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/2 lg:w-1/4 flex flex-shrink-0 px-4"
              >
                <div className="p-6 bg-offWhite rounded-xl border h-full">
                  <div className="flex text-deepBlue mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current"
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <p className="text-secondary/80 text-sm mb-4">
                    {testimonial.content}
                  </p>
                  <div className="mt-auto">
                    <p className="font-medium text-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-secondary/60">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
