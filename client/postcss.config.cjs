// Support both the new `@tailwindcss/postcss` integration (Tailwind v4+)
// and fall back to requiring `tailwindcss` directly if the package
// hasn't been installed yet. This prevents Vite from crashing while
// the developer installs dependencies.
module.exports = {
    plugins: [
        // Use the classic tailwindcss PostCSS plugin (v3)
        require('tailwindcss'),
        require('autoprefixer')
    ]
}
