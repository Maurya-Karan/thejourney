"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BirthdayPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            {/* Animated background circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" animate={{ x: [-50, 50, -50], y: [0, 30, 0] }} transition={{ duration: 8, repeat: Infinity }} />
                <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" animate={{ x: [50, -50, 50], y: [30, 0, 30] }} transition={{ duration: 10, repeat: Infinity }} />
            </div>

            <div className="relative z-10 w-full max-w-md">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="closed"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-center"
                        >
                            {/* Gift Box */}
                            <motion.button
                                onClick={() => setIsOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full mb-8 focus:outline-none"
                            >
                                <motion.div
                                    animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                    className="relative mx-auto w-32 h-40"
                                >
                                    {/* Gift Box */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-lg shadow-2xl" />

                                    {/* Ribbon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-2 h-full bg-yellow-300" />
                                        <div className="w-full h-2 bg-yellow-300" />
                                    </div>

                                    {/* Bow */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12">
                                        <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-80" />
                                    </div>
                                </motion.div>
                            </motion.button>

                            {/* Text */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-5xl font-bold text-white mb-4"
                            >
                                Happy Birthday
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                                    Dad!
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg text-gray-300 mb-8 leading-relaxed"
                            >
                                Open your gift to see how much you mean to us
                            </motion.p>

                            {/* Floating particles */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="text-4xl"
                            >
                                ✨
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-center"
                        >
                            {/* Confetti */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full"
                                    style={{
                                        backgroundColor: ["#FFD700", "#FF6B6B", "#4ECDC4", "#95E1D3", "#FFA07A"][i % 5],
                                        left: `${Math.random() * 100}%`,
                                    }}
                                    initial={{ y: 0, opacity: 1 }}
                                    animate={{ y: -300, opacity: 0, rotate: 360 }}
                                    transition={{ duration: 2.5, delay: i * 0.1 }}
                                />
                            ))}

                            {/* Main Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.div className="text-6xl mb-6" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                                    🎉
                                </motion.div>

                                <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                                    You're Our Hero
                                </h2>

                                <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-md mx-auto">
                                    Your strength, wisdom, and unconditional love have shaped who we are.
                                    Thank you for being our greatest inspiration every single day.
                                </p>
                            </motion.div>

                            {/* Quick Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-4 mb-10"
                            >
                                {[
                                    { emoji: "💪", text: "Your strength guides us" },
                                    { emoji: "❤️", text: "Your love inspires us" },
                                    { emoji: "🌟", text: "Your wisdom teaches us" },
                                    { emoji: "🙏", text: "Your sacrifice humbles us" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center justify-center gap-3 text-gray-200"
                                    >
                                        <span className="text-2xl">{item.emoji}</span>
                                        <span className="text-lg">{item.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Reset Button */}
                            <motion.button
                                onClick={() => setIsOpen(false)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                            >
                                Open Gift Again
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default BirthdayPage;
