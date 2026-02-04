"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift, FaBirthdayCake, FaStar, FaHeart } from "react-icons/fa";
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

const COLORS = ["#FF6B9D", "#FFD93D", "#6BCB77", "#4D96FF", "#FF8C42", "#C9B1FF"];

export default function BirthdaySurprise() {
    const [stage, setStage] = useState("intro");
    const [showConfetti, setShowConfetti] = useState(false);

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
