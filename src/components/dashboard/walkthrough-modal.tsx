"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Step {
  title: string;
  description: string;
  targetId: string;
  position?: "top" | "bottom" | "left" | "right";
}

const STEPS: Step[] = [
  {
    title: "Welcome to Autobiz!",
    description: "Ready to explore? Let's quickly show you how to get started",
    targetId: "",
  },
  {
    title: "Your Wallet",
    description:
      "This is your wallet balance area, quick top-up options, and latest updates.",
    targetId: "wallet-section",
    position: "bottom",
  },
  {
    title: "Quick Services",
    description:
      "Easily buy airtime, data, electricity, and more from this menu.",
    targetId: "services-grid",
    position: "top",
  },
  {
    title: "Fund Your Wallet",
    description:
      "Before making purchases, you need funds in your wallet. Tap here to add money!",
    targetId: "fund-wallet-button",
    position: "bottom",
  },
  {
    title: "All Set!",
    description: "You're all caught up. Start exploring the dashboard.",
    targetId: "",
  },
];

export function WalkthroughModal() {
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  const updateHighlightPosition = () => {
    const step = STEPS[currentStep];

    if (!step.targetId) {
      setHighlightStyle({});
      setModalStyle({});
      return;
    }

    const targetElement = document.getElementById(step.targetId);
    if (!targetElement) return;

    // Scroll element into view if needed
    targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

    // Get element position and dimensions
    const rect = targetElement.getBoundingClientRect();
    const padding = 10; // Extra padding around the element

    // Set highlight style
    setHighlightStyle({
      position: "fixed",
      top: rect.top - padding + "px",
      left: rect.left - padding + "px",
      width: rect.width + padding * 2 + "px",
      height: rect.height + padding * 2 + "px",
      boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.75)",
      borderRadius: "8px",
      zIndex: 50,
      pointerEvents: "none",
    });

    const modalWidth = 400;
    const modalHeight = 200;
    let modalTop = 0;
    let modalLeft = 0;

    switch (step.position) {
      case "top":
        modalTop = rect.top - modalHeight - 20;
        modalLeft = rect.left + rect.width / 2 - modalWidth / 2;
        break;
      case "bottom":
        modalTop = rect.bottom + 20;
        modalLeft = rect.left + rect.width / 2 - modalWidth / 2;
        break;
      case "left":
        modalTop = rect.top + rect.height / 2 - modalHeight / 2;
        modalLeft = rect.left - modalWidth - 20;
        break;
      case "right":
        modalTop = rect.top + rect.height / 2 - modalHeight / 2;
        modalLeft = rect.right + 20;
        break;
      default:
        modalTop = rect.bottom + 20;
        modalLeft = rect.left + rect.width / 2 - modalWidth / 2;
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (modalLeft < 20) modalLeft = 20;
    if (modalLeft + modalWidth > viewportWidth - 20)
      modalLeft = viewportWidth - modalWidth - 20;
    if (modalTop < 20) modalTop = 20;
    if (modalTop + modalHeight > viewportHeight - 20)
      modalTop = viewportHeight - modalHeight - 20;

    if (step.targetId) {
      setModalStyle({
        position: "fixed",
        top: modalTop + "px",
        left: modalLeft + "px",
        width: modalWidth + "px",
        zIndex: 51,
        transform: "none",
      });
    } else {
      setModalStyle({});
    }
  };

  useEffect(() => {
    updateHighlightPosition();

    const handleResize = () => {
      updateHighlightPosition();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setOpen(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setOpen(false);
  };

  const useDefaultModal = currentStep === 0 || currentStep === STEPS.length - 1;

  return (
    <>
      {open && !useDefaultModal && (
        <div style={highlightStyle}>
          <div className="absolute inset-0 border-2 border-blue-500 rounded-lg animate-pulse "></div>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`sm:max-w-md  ${!useDefaultModal ? "absolute " : ""}`}
          style={!useDefaultModal ? modalStyle : {}}
        >
          {currentStep === 0 && (
            <div className="text-center">
              <Image
                src="/images/welcome.png"
                alt="Welcome"
                width={200}
                height={200}
                className="mx-auto mb-4"
              />
            </div>
          )}
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold mb-2">
              {STEPS[currentStep].title}
            </h2>
            <p className="text-gray-600">{STEPS[currentStep].description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-x-2">
              {currentStep === 0 ? (
                <Button variant="ghost" onClick={handleSkip}>
                  Skip
                </Button>
              ) : (
                <Button variant="ghost" onClick={handleBack}>
                  Back
                </Button>
              )}
            </div>
            <div className="flex items-center gap-2">
              {STEPS.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentStep ? "bg-primary" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <Button onClick={handleNext}>
              {currentStep === STEPS.length - 1 ? "Explore page" : "Next"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
