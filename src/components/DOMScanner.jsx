import { useState, useEffect } from "react";

const DOMScanner = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Hide on touch devices or before the mouse enters the screen
  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block overflow-hidden mix-blend-difference text-white">
      {/* 1. The Vertical Axis */}
      <div
        className="absolute top-0 bottom-0 w-[1px] bg-white/30"
        style={{ transform: `translateX(${mousePos.x}px)` }}
      />

      {/* 2. The Horizontal Axis */}
      <div
        className="absolute left-0 right-0 h-[1px] bg-white/30"
        style={{ transform: `translateY(${mousePos.y}px)` }}
      />

      {/* 3. The Live Coordinate HUD */}
      <div
        className="absolute flex flex-col gap-0 font-mono text-[9px] font-black tracking-widest uppercase ml-4 mt-4"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <span>SYS.POS</span>
        <span className="text-[#facc15]">
          X: {mousePos.x.toString().padStart(4, "0")}
        </span>
        <span className="text-[#3b82f6]">
          Y: {mousePos.y.toString().padStart(4, "0")}
        </span>
      </div>
    </div>
  );
};

export default DOMScanner;
