import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { letters } from '../constants';
import LettersLogin from './LettersLogin';
import LetterDetail from './LetterDetail';

const Letters = () => {
    const { isAuthenticated, logout } = useAuth();
    const [selectedLetter, setSelectedLetter] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Latest');

    if (!isAuthenticated) {
        return <LettersLogin />;
    }

    const categories = ['Latest', 'All'];

    // Create a sorted copy to avoid mutating the original array
    const sortedLetters = [...letters].sort((a, b) => new Date(b.date) - new Date(a.date));

    const filteredLetters = selectedCategory === 'Latest'
        ? [sortedLetters[0]]
        : sortedLetters;

    if (selectedLetter) {
        return <LetterDetail letter={selectedLetter} onBack={() => setSelectedLetter(null)} />;
    }

    return (
        <div id="letters" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
                    animate={{ x: [-50, 50, -50], y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-center mb-12"
                >
                    <div>
                        <h1 className="text-5xl md:text-6xl font-black text-white mb-2">Letters</h1>
                        <p className="text-gray-300 text-lg">Personal reflections and stories</p>
                    </div>
                    <motion.button
                        onClick={logout}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-red-500/20 border border-red-500/50 text-red-400 font-semibold rounded-lg hover:bg-red-500/30 transition-all"
                    >
                        Logout
                    </motion.button>
                </motion.div>

                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-12"
                >
                    {categories.map((cat, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === cat
                                ? 'bg-purple-500 text-white'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Letters Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredLetters.map((letter, i) => (
                        <motion.div
                            key={letter.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedLetter(letter)}
                            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-500/50 cursor-pointer transition-all group"
                        >


                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                {letter.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                {letter.excerpt}
                            </p>

                            {/* Date */}
                            <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-xs">
                                    {new Date(letter.date).toLocaleDateString()}
                                </span>
                                <motion.span
                                    whileHover={{ x: 5 }}
                                    className="text-purple-400 text-lg"
                                >
                                    →
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredLetters.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-gray-400 text-lg">No letters in this category yet.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Letters;
