import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

import {Inter} from "next/font/google";
const inter = Inter({subsets: ["latin"]});

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "notepwa",
    description: "It's a simple progressive web application made with NextJS",
    generator: "Next.js",
    manifest: "/manifest.json",
    keywords: ["nextjs", "next14", "pwa", "next-pwa"],
    authors: [
        {
            name: "bygxs",
            url: "https://lenefs.com/",
        },
    ],
    icons: [
        {rel: "apple-touch-icon", sizes: "192x192", url: "icons/icons-192.PNG"}, // for iOS home screen
        {rel: "icon", sizes: "192x192", url: "icons/icons-192.PNG"}, // favicon
        {rel: "icon", sizes: "256x256", url: "icons/icons-256.PNG"}, // favicon (larger)
        {rel: "icon", sizes: "512x512", url: "icons/icons-512.PNG"}, // largest icon for PWA
    ],
};

// Move viewport to its own export
export const viewport = "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}>
                {children}
            </body>
        </html>
    );
}
