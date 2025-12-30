"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function ClientHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-20 lg:px-[88px] py-4 border-b"
      style={{
        backgroundColor: "#F7F5F3",
        borderBottom: "1px dashed #DAD3C8",
      }}
    >
      <div className="flex items-center cursor-pointer" onClick={() => (window.location.href = "https://genpire.com/")}>
        <div
          className="font-bold text-xl md:text-2xl tracking-tight flex items-center gap-[7px]"
          style={{ color: "#000000" }}
        >
          <img src="/G.svg" alt="" className="md:w-[26px] md:h-[26px] w-[24px] h-[24px]" />{" "}
          <img src="/genpire.svg" alt="" className=":md:w-[72px] md:h-[18px] w-[67px] h-[16px]" />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center gap-3">
          <a
            href="#faq"
            className="px-2 py-1 text-base hover:opacity-70 transition-opacity"
            style={{ color: "#4B4844" }}
            onClick={(e) => handleSmoothScroll(e, "faq")}
          >
            FAQ
          </a>
        </nav>

        <button
          className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
          onClick={() => setIsAuthModalOpen(true)}
          style={{ backgroundColor: "#18181B", color: "#FFFFFF" }}
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: "#000000" }}>
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 right-0 md:hidden flex flex-col gap-4 p-6 border-t"
          style={{ backgroundColor: "#F7F5F3", borderTop: "1px dashed #DAD3C8" }}
        >
          <a
            href="#faq"
            className="text-base hover:opacity-70 transition-opacity"
            style={{ color: "#4B4844" }}
            onClick={(e) => handleSmoothScroll(e, "faq")}
          >
            FAQ
          </a>
          <button
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
            onClick={() => setIsAuthModalOpen(true)}
            style={{ backgroundColor: "#18181B", color: "#FFFFFF" }}
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {isAuthModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Auth Modal</h2>
            <p>Modal content here.</p>
            <button onClick={() => setIsAuthModalOpen(false)} className="mt-4 px-4 py-2 bg-gray-200 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
