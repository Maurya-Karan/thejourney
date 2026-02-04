"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaGift, FaBirthdayCake, FaStar, FaHeart, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { GiBalloons, GiPartyPopper } from "react-icons/gi";




// interface Particle {
//   id: number;
//   x: number;
//   color: string;
//   delay: number;
//   size: number;
// }

// interface Balloon {
//   id: number;
//   x: number;
//   color: string;
//   delay: number;
//   scale: number;
// }

const CAROUSEL_SLIDES = [
    {
        image: "https://drive.google.com/thumbnail?id=1K1oLiurTP213zWsAv70K9HymF9vM_8TC&sz=w1000",
        
    },

    {
        image: "https://drive.google.com/thumbnail?id=1hDwNVvocGyGJ5-Gf5XulljIlosdEyB6w&sz=w1000",
        
    },
    {
        image: "https://drive.google.com/thumbnail?id=1fF7e3LGY2ws_gdPF1G-cdh3oxwUwhQSL&sz=w1000",
       
    },
    {
        image: "https://drive.google.com/thumbnail?id=1nUh9ond7VJyp49oloXv_kZLbQLau6itA&sz=w1000",
       
    },
    {
        image: "https://drive.google.com/thumbnail?id=1xsqrNC1V-LdP7f5VVD_ESPgyTkCf06wO&sz=w1000",
        
    },
    {
        image: "https://drive.google.com/thumbnail?id=1PDPi5TWar6DB4dCic8pWCrvNSaqbuH75&sz=w1000",
       
    },
    {
        image: "https://drive.google.com/thumbnail?id=1D32qxi-qB-EbTFLv-fAbmBJF8wzsnJ5J&sz=w1000",
       
    },

    {
        image: "https://drive.google.com/thumbnail?id=1NvMqVTG-nDZ3j5RmMvljY_PrHgiZLPm-&sz=w1000",
       
    }
];

const COLORS = ["#FF6B9D", "#FFD93D", "#6BCB77", "#4D96FF", "#FF8C42", "#C9B1FF"];

export default function BirthdaySurprise() {
    const [stage, setStage] = useState("intro");
    const [showConfetti, setShowConfetti] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const carouselRef = useRef(null);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);

    const confetti = useMemo(() =>
        Array.from({ length: 60 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            delay: Math.random() * 2,
            size: Math.random() * 8 + 4,
        })), []
    );

    const balloons = useMemo(() =>
        Array.from({ length: 12 }, (_, i) => ({
            id: i,
            x: 5 + (i * 8),
            color: COLORS[i % COLORS.length],
            delay: Math.random() * 0.5,
            scale: 0.8 + Math.random() * 0.4,
        })), []
    );

    const stars = useMemo(() =>
        Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            delay: Math.random() * 3,
            size: Math.random() * 16 + 8,
        })), []
    );

    useEffect(() => {
        if (stage === "celebration") {
            setShowConfetti(true);
        }
    }, [stage]);

    // Handle mouse movement for parallax effect
    const handleMouseMove = (e) => {
        if (carouselRef.current) {
            const rect = carouselRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            setMouseX(x);
        }
    };


    return (
        <div id="HB" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a1025] via-[#2d1f3d] to-[#1a1025]">
            {/* Animated background stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute"
                        style={{ left: `${star.x}%`, top: `${Math.random() * 100}%` }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: star.delay,
                        }}
                    >
                        <FaStar style={{ color: star.color, fontSize: star.size }} />
                    </motion.div>
                ))}
            </div>

            {/* Confetti */}
            <AnimatePresence>
                {showConfetti && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
                        {confetti.map((piece) => (
                            <motion.div
                                key={piece.id}
                                className="absolute rounded-sm"
                                style={{
                                    left: `${piece.x}%`,
                                    width: piece.size,
                                    height: piece.size * 1.5,
                                    backgroundColor: piece.color,
                                }}
                                initial={{ top: -20, rotate: 0, opacity: 1 }}
                                animate={{
                                    top: "110%",
                                    rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                                    opacity: [1, 1, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    delay: piece.delay,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Floating balloons in celebration */}
            <AnimatePresence>
                {stage === "celebration" && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-40">
                        {balloons.map((balloon) => (
                            <motion.div
                                key={balloon.id}
                                className="absolute bottom-0"
                                style={{ left: `${balloon.x}%` }}
                                initial={{ y: 200, opacity: 0 }}
                                animate={{ y: -800, opacity: 1 }}
                                transition={{
                                    duration: 8 + Math.random() * 4,
                                    delay: balloon.delay,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                }}
                            >
                                <GiBalloons
                                    style={{
                                        color: balloon.color,
                                        fontSize: `${balloon.scale * 60}px`,
                                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Main content */}
            <div className="relative z-30 flex items-center justify-center min-h-screen p-4">
                <AnimatePresence mode="wait">
                    {/* Intro Stage */}
                    {stage === "intro" && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8, y: -50 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FaStar className="mx-auto text-6xl text-yellow-400 mb-6" />
                            </motion.div>

                            <motion.h1
                                className="text-4xl md:text-6xl font-bold text-white mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400">
                                    Something Special
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-300 mb-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                A surprise awaits you...
                            </motion.p>

                            <motion.button
                                onClick={() => setStage("gift")}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-lg shadow-lg shadow-pink-500/30"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236,72,153,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                Reveal My Surprise
                            </motion.button>
                        </motion.div>
                    )}

                    {/* Gift Stage */}
                    {stage === "gift" && (
                        <motion.div
                            key="gift"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.5 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <motion.p
                                className="text-2xl text-gray-300 mb-8"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Tap the gift to open!
                            </motion.p>

                            <motion.button
                                onClick={() => setStage("celebration")}
                                className="relative group cursor-pointer bg-transparent border-0"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [-2, 2, -2],
                                }}
                                transition={{
                                    y: { duration: 2, repeat: Infinity },
                                    rotate: { duration: 1.5, repeat: Infinity },
                                }}
                            >
                                {/* Gift glow effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/50 to-yellow-500/50 blur-xl"
                                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                {/* Gift box */}
                                <div className="relative bg-gradient-to-br from-pink-500 to-rose-600 p-8 rounded-2xl shadow-2xl">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-16 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-t-lg" />
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-gradient-to-b from-yellow-400 to-yellow-500" />
                                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-4 bg-gradient-to-r from-yellow-400 to-yellow-500" />

                                    <FaGift className="text-8xl md:text-9xl text-white relative z-10" />
                                </div>
                            </motion.button>

                            <motion.div
                                className="flex justify-center gap-4 mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                    >
                                        <FaHeart className="text-2xl text-pink-400" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Celebration Stage */}
                    {stage === "celebration" && (
                        <motion.div
                            key="celebration"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-center relative"
                        >
                            {/* Party poppers */}
                            <motion.div
                                className="absolute -left-4 -top-4"
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3, type: "spring" }}
                            >
                                <GiPartyPopper className="text-5xl text-yellow-400" />
                            </motion.div>
                            <motion.div
                                className="absolute -right-4 -top-4"
                                initial={{ scale: 0, rotate: 45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.4, type: "spring" }}
                            >
                                <GiPartyPopper className="text-5xl text-pink-400" style={{ transform: "scaleX(-1)" }} />
                            </motion.div>

                            {/* Cake */}
                            <motion.div
                                initial={{ scale: 0, y: 50 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            >
                                <FaBirthdayCake className="text-8xl md:text-9xl mx-auto text-pink-400 drop-shadow-lg" />
                            </motion.div>

                            {/* Main message */}
                            <motion.div
                                className="mt-8"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                                    <motion.span
                                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 bg-[length:200%_auto]"
                                        animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        Happy Birthday Mummy Ji!
                                    </motion.span>
                                </h1>

                                <motion.p
                                    className="text-xl md:text-2xl text-gray-300 mb-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    Wishing you endless joy and happiness
                                </motion.p>

                                <motion.p
                                    className="text-lg text-gray-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                >
                                    May all your dreams come true!
                                </motion.p>
                            </motion.div>

                            {/* Floating hearts */}
                            <motion.div
                                className="flex justify-center gap-6 mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                            >
                                {COLORS.slice(0, 5).map((color, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [0, -20, 0],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.15,
                                        }}
                                    >
                                        <FaHeart style={{ color, fontSize: "28px" }} />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Carousel Stage */}

                            <motion.div
                                key="carousel"
                                ref={carouselRef}
                                onMouseMove={handleMouseMove}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-4xl mx-auto px-4"
                            >
                               
                                {/* Parallax Image Carousel */}
                                <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentSlide}
                                            className="absolute inset-0"
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {/* Parallax background image */}
                                            <motion.div
                                                className="absolute inset-0"
                                                style={{
                                                    backgroundImage: `url(${CAROUSEL_SLIDES[currentSlide].image})`,
                                                    backgroundSize: "contain",
                                                    backgroundPosition: "center",
                                                }}
                                                animate={{
                                                    x: mouseX * 30,
                                                    scale: 1.1,
                                                }}
                                                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                                            {/* Quote content */}
                                            <motion.div
                                                className="absolute inset-0 flex flex-col items-center justify-end p-8 md:p-12"
                                                animate={{ x: mouseX * -15 }}
                                                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                                            >
                                                <FaQuoteLeft className="text-3xl text-pink-400/60 mb-4" />
                                                
                                            </motion.div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation arrows */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors z-10"
                                    >
                                        <FaChevronLeft className="text-xl" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors z-10"
                                    >
                                        <FaChevronRight className="text-xl" />
                                    </button>

                                    {/* Dots indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                        {CAROUSEL_SLIDES.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentSlide(idx)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentSlide
                                                    ? "bg-pink-400 w-6"
                                                    : "bg-white/50 hover:bg-white/70"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Continue button */}

                            </motion.div>


                            {/* Replay button */}
                            <motion.button
                                onClick={() => {
                                    setShowConfetti(false);
                                    setStage("intro");
                                }}
                                className="mt-10 px-6 py-3 rounded-full border-2 border-white/30 text-white/80 hover:bg-white/10 transition-colors"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Replay Surprise
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
