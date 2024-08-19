// flow of environment variable --> .env --> conf.js (here) --> use anywhere by just importing this file
const conf = {
    geminiapikey: String(import.meta.env.VITE_APP_GEMINI_API_KEY),
}

export default conf