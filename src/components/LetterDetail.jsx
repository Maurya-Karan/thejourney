import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { translateContent, languages } from '../utils/translateWithLLM';

const LetterDetail = ({ letter, onBack }) => {
    const { logout } = useAuth();
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [translatedContent, setTranslatedContent] = useState(letter.content);
    const [isTranslating, setIsTranslating] = useState(false);

    useEffect(() => {
        const fetchTranslation = async () => {
            if (selectedLanguage === 'en') {
                setTranslatedContent(letter.content);
                return;
            }

            setIsTranslating(true);
            try {
                const langName = languages.find(l => l.code === selectedLanguage)?.name || selectedLanguage;
                console.log("inside setIsTranslating..");
                const contentTranslation = await translateContent(letter.content, langName);
                console.log(contentTranslation);
                setTranslatedContent(contentTranslation);
            } catch (error) {
                console.error('Translation failed:', error);
                setTranslatedContent('Translation failed. Please try again.');
            } finally {
                setIsTranslating(false);
            }
        };

        fetchTranslation();
    }, [selectedLanguage, letter]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
                    animate={{ x: [-50, 50, -50], y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-center mb-8"
                >
                    <motion.button
                        onClick={onBack}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                    >
                        ← Back to Letters
                    </motion.button>
                    <motion.button
                        onClick={logout}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-red-500/20 border border-red-500/50 text-red-400 font-semibold rounded-lg hover:bg-red-500/30 transition-all"
                    >
                        Logout
                    </motion.button>
                </motion.div>

                {/* Letter Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20"
                >
                    {/* Category */}
                    <div className="inline-block px-3 py-1 bg-purple-500/30 text-purple-300 text-xs font-semibold rounded-full mb-6">
                        {letter.category}
                    </div>

                    {/* Language Selector */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {languages.map((lang) => (
                            <motion.button
                                key={lang.code}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedLanguage(lang.code)}
                                className={`px-4 py-2 rounded-lg font-semibold transition-all ${selectedLanguage === lang.code
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                    }`}
                            >
                                {lang.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        {letter.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8 pb-8 border-b border-white/10">
                        <div>
                            <p className="text-gray-400 text-sm">Author</p>
                            <p className="text-white font-semibold">{letter.author}</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Published</p>
                            <p className="text-white font-semibold">
                                {new Date(letter.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-invert max-w-none"
                    >
                        {isTranslating && (
                            <div className="mb-6 p-4 bg-purple-500/20 border border-purple-500/50 rounded-lg text-purple-300">
                                ✨ Translating to {languages.find(l => l.code === selectedLanguage)?.name || selectedLanguage}...
                            </div>
                        )}
                        <div className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                            {isTranslating ? letter.content : translatedContent}
                        </div>
                    </motion.div>

                    {/* Share / More */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 pt-8 border-t border-white/10"
                    >
                        <p className="text-gray-400 text-sm mb-4">Share your thoughts or feedback</p>
                        <a
                            href={`mailto:karanmaurya.dev@gmail.com?subject=Re: ${letter.title}`}
                            className="inline-block px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all"
                        >
                            Send Feedback
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default LetterDetail;
