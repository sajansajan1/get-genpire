"use client";
import { CTASection } from "@/components/home/cta-section";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { PlatformSection } from "@/components/home/platform-section";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [userPrompt, setUserPrompt] = useState("");
  const [displayOneText, setDisplayOneText] = useState("");

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground relative">
      <Header setIsAuthModalOpen={setIsAuthModalOpen} handleSmoothScroll={handleSmoothScroll} />
      <HeroSection
        setIsAuthModalOpen={setIsAuthModalOpen}
        setIsDemoModalOpen={setIsDemoModalOpen}
        userPrompt={userPrompt}
        setUserPrompt={setUserPrompt}
        displayedText={displayOneText}
      />
      <PlatformSection />
      <CTASection setIsAuthModalOpen={setIsAuthModalOpen} setIsDemoModalOpen={setIsDemoModalOpen} />
    </div>
  );
}
