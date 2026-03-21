import Groq from "groq-sdk";

// Initialize the Groq client
const apiKey = import.meta.env.VITE_GROQ_API_KEY;

if (!apiKey) {
    console.error('❌ VITE_GROQ_API_KEY is not configured. Translation features will not work.');
}

const groq = new Groq({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
});

// Rate limiting for translations (prevent abuse)
const translationCache = new Map();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export const translateContent = async (text, targetLanguage) => {
    // Create cache key
    const cacheKey = `${text.substring(0, 50)}_${targetLanguage}`;

    // Check cache first
    const cached = translationCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return cached.translation;
    }

    try {
        const prompt = `You are an expert translator. Translate the following English text to ${targetLanguage} while maintaining the emotional tone, context, and meaning. Keep the translation natural and contextual, not mechanical.

English Text:
"${text}"

Provide only the translated text without any explanations or additional commentary.`;

        // Groq uses the chat completions endpoint
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            // Using versatile model for reliable translations
            model: "llama-3.3-70b-versatile",
            temperature: 0.3, // Lower temperature for consistent translations
            max_tokens: 2000, // Limit output tokens
        });

        // Extract the text from the response structure
        const translation = chatCompletion.choices[0]?.message?.content || "";

        // Cache the translation
        translationCache.set(cacheKey, {
            translation,
            timestamp: Date.now()
        });

        return translation;

    } catch (error) {
        console.error("Translation error:", error);

        // Return user-friendly error without exposing sensitive details
        if (error.status === 401) {
            throw new Error('Translation service authentication failed. Please check your configuration.');
        } else if (error.status === 429) {
            throw new Error('Translation service is busy. Please try again later.');
        } else {
            throw new Error(`Failed to translate to ${targetLanguage}. Please try again.`);
        }
    }
};

export const languages = [
    { code: "en", name: "English", label: "English" },
    { code: "hi", name: "Hindi", label: "हिंदी" },
    { code: "pa", name: "Punjabi", label: "ਪੰਜਾਬੀ" },
];