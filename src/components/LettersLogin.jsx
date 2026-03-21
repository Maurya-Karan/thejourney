import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const LettersLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login, isLocked } = useAuth();
    const [attemptsRemaining, setAttemptsRemaining] = useState(5);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isLocked) {
            setError('Account is locked. Please try again later.');
            return;
        }

        setError('');
        setIsLoading(true);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        const result = login(username, password);
        if (!result.success) {
            setError(result.error);
            setPassword(''); // Clear password field on error
            if (result.attemptsRemaining !== undefined) {
                setAttemptsRemaining(result.attemptsRemaining);
            }
        }

        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
                    animate={{ x: [-50, 50, -50], y: [0, 30, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
                    animate={{ x: [50, -50, 50], y: [30, 0, 30] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-4xl font-black text-white mb-2">Letters</h1>
                        <p className="text-gray-300">Access exclusive letters</p>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        {/* Username */}
                        <div>
                            <label className="block text-white font-semibold mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-white font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                                disabled={isLoading}
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm"
                            >
                                {error}
                                {attemptsRemaining > 0 && attemptsRemaining < 5 && (
                                    <p className="mt-2 text-xs">Attempts remaining: {attemptsRemaining}</p>
                                )}
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isLoading || !username || !password || isLocked}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLocked ? 'Account Locked' : isLoading ? 'Unlocking...' : 'Unlock Letters'}
                        </motion.button>
                    </motion.form>

                    {/* Security Notice */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center"
                    >
                        <p className="text-blue-300 text-sm">
                            🔒 Your login is protected with rate limiting and attempt tracking.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default LettersLogin;
