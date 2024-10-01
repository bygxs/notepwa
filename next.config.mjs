import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // cacheOnFrontEndNav: true,
    // aggressiveFrontEndNavCaching: true,
    // reloadOnOnline: true,
    // swcMinify: true,
    // dest: "public",
    // fallbacks: {
    //     //image: "/static/images/fallback.png",
    //     document: "/offline", // if you want to fallback to a custom page rather than /_offline
    //     // font: '/static/font/fallback.woff2',
    //     // audio: ...,
    //     // video: ...,
    // },
    // workboxOptions: {
    //     disableDevLogs: true,
    // },
    // // ... other options you like

    reactStrictMode: true, // Enable React strict mode for improved error handling
    swcMinify: true, // Enable SWC minification for improved performance
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
};

export default withPWA({
    dest: "public", // destination directory for the PWA files
    disable: process.env.NODE_ENV === "development", // disable PWA in the development environment
    register: true, // register the PWA service worker
    skipWaiting: true, // skip waiting for service worker activation
})(nextConfig);
