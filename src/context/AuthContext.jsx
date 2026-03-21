import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Hash function for password verification (simple implementation)
const hashPassword = (password) => {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
};

// Store hashed credentials (in production, validate against backend)
const VALID_CREDENTIAL_HASHES = {
    'santoshkumar': hashPassword('7814663220')
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [isLocked, setIsLocked] = useState(false);

    const MAX_LOGIN_ATTEMPTS = 5;
    const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

    // Check if user is already logged in (from localStorage)
    useEffect(() => {
        const savedAuth = localStorage.getItem('letterAuth');
        const lockoutTime = localStorage.getItem('loginLockout');

        if (lockoutTime && Date.now() < parseInt(lockoutTime)) {
            setIsLocked(true);
            setIsLoading(false);
            return;
        }

        if (lockoutTime) {
            localStorage.removeItem('loginLockout');
            setLoginAttempts(0);
        }

        if (savedAuth) {
            try {
                const authData = JSON.parse(savedAuth);
                setIsAuthenticated(true);
                setUser(authData);
            } catch (e) {
                console.error('Failed to parse auth data');
                localStorage.removeItem('letterAuth');
            }
        }
        setIsLoading(false);
    }, []);

    const login = (username, password) => {
        // Check if account is locked
        if (isLocked) {
            return { success: false, error: 'Too many login attempts. Please try again later.' };
        }

        // Validate input
        if (!username || !password) {
            return { success: false, error: 'Username and password are required' };
        }

        // Prevent brute force
        if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
            setIsLocked(true);
            const lockoutUntil = Date.now() + LOCKOUT_TIME;
            localStorage.setItem('loginLockout', lockoutUntil.toString());
            return { success: false, error: 'Too many login attempts. Please try again later.' };
        }

        // Verify credentials
        if (VALID_CREDENTIAL_HASHES[username] === hashPassword(password)) {
            const userData = { username, role: 'reader', loginTime: Date.now() };
            setIsAuthenticated(true);
            setUser(userData);
            setLoginAttempts(0); // Reset attempts on successful login
            localStorage.setItem('letterAuth', JSON.stringify(userData));
            return { success: true };
        }

        // Increment failed attempts
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);

        return {
            success: false,
            error: 'Invalid credentials',
            attemptsRemaining: MAX_LOGIN_ATTEMPTS - newAttempts
        };
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setLoginAttempts(0);
        localStorage.removeItem('letterAuth');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading, isLocked }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
