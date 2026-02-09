"use client";
import { Sparkles, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const features = [
    { label: "Query", color: "text-[#e535ab]" },
    { label: "Mutation", color: "text-purple-500" },
    { label: "Subscription", color: "text-blue-500" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-b border-neutral-100 p-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-pink-50/30 via-transparent to-purple-50/20 pointer-events-none"></div>
      <div className="flex items-center justify-between gap-16 relative z-10">
        <div className="max-w-187.5 flex flex-col items-start">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#e535ab]" />
            <span className="text-neutral-600">
              Interactive GraphQL Playground
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight tracking-tight">
            Built to Demonstrate the Usage of{" "}
            <span className="text-[#e535ab]">GraphQL</span> in <br />
            Real-Life Applications
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed font-light max-w-125">
            Explore the power of GraphQL with interactive examples, live
            queries, and real-world use cases.
          </p>
        </div>
        {/* Animated GraphQL Operations */}
        <div className="flex flex-col gap-8 min-w-175">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className={`transition-all duration-500 ${
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-100 opacity-40"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`text-7xl font-bold font-mono ${feature.color} transition-all duration-500`}
                >
                  {feature.label}
                </div>
                {index === activeIndex && (
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 rounded-full bg-current animate-pulse"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-current animate-pulse"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-current animate-pulse"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-12 h-12 animate-bounce hover:bg-white/50"
        >
          <ArrowDown className="h-5 w-5 text-neutral-600" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
