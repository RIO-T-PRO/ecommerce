"use client";

import { heroData } from "@/lib/data/hero";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/button";

const HeroSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      const { scrollLeft, clientWidth, scrollWidth } = container;
      const nextScroll =
        scrollLeft + clientWidth >= scrollWidth - 10
          ? 0
          : scrollLeft + clientWidth;
      container.scrollTo({ left: nextScroll, behavior: "smooth" });
    }, 5000);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] bg-app-bg-gray border-b border-b-gray-line/40 overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {heroData.map((item, index) => (
          <div
            key={item.id}
            className="relative shrink-0 w-full h-full  snap-center grid grid-cols-1 md:grid-cols-2"
          >
            <div className="scroll-reveal flex flex-col justify-center px-6 md:px-12  z-10 order-2 md:order-1">
              <span className="text-secondary text-xs font-medium  tracking-widest mb-3">
                {item.title}
              </span>
              <h1 className="text-primary text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-3">
                {item.offer}
              </h1>
              <p className="text-secondary text-sm md:text-lg max-w-md opacity-80 mb-6">
                {item.subtitle}
              </p>
              <Button
                variant={"primary"}
                size="md"
                className="w-fit font-bold uppercase tracking-widest hover:bg-red-main transition-colors"
              >
                Explore Collection
              </Button>
            </div>

            <div className="relative h-full  w-full rounded-3xl  overflow-hidden order-1 md:order-2">
              <img
                src={item.image}
                alt={item.title}
                className="scroll-zoom aspect-2/2 size-100  object-contain "
              />
              <div className="absolute inset-0 bg-app-bg-gray/40 md:hidden" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-8 md:left-16 flex gap-2 z-20">
        {heroData.map((_, i) => (
          <button
            key={i}
            onClick={() =>
              scrollContainerRef.current?.scrollTo({
                left: scrollContainerRef.current.clientWidth * i,
                behavior: "smooth",
              })
            }
            className={`h-1 rounded-full transition-all duration-300 ${
              activeIndex === i ? "w-8 bg-red-main" : "w-4 bg-gray-line"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
