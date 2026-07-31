// app/layout.tsx

import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from '../components/layout/ScrollToTop';
import FloatingIcons from '../components/FloatingIcons';
import JsonLd from '../components/seo/JsonLd';
import type { ReactNode } from "react";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";

// --- FONT LOADING ---
const foundersGrotesk = localFont({
    src: [
        { path: "../fonts/FoundersGrotesk-Regular.otf", weight: "400", style: "normal" },
        { path: "../fonts/FoundersGrotesk-Medium.otf", weight: "500", style: "normal" },
        { path: "../fonts/FoundersGrotesk-Bold.otf", weight: "700", style: "normal" },
    ],
    variable: "--font-foundersgrotesk",
    display: "swap",
});

const Baskervville = localFont({
    src: [
        { path: "../fonts/Baskervville-Regular.ttf", weight: "400", style: "normal" },
    ],
    variable: "--font-Baskervville",
    display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://velsplus.com';
const defaultTitle = "Vels Plus | Best NEET, JEE & Tuition Coaching Centre in Chennai";
const defaultDescription = "Vels Plus offers expert academic coaching for NEET UG, IIT-JEE (Main & Advanced), CBSE & State Board Tuitions, and Foundation courses in Chennai (Anna Nagar, Perambur, Velachery, Tambaram).";

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#2f3192',
};

// --- METADATA API (Next.js-Idiomatic SEO) ---
export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: defaultTitle,
        template: "%s | Vels Plus - Coaching Centre Chennai",
    },
    description: defaultDescription,
    keywords: [
        "Vels Plus",
        "NEET coaching Chennai",
        "IIT JEE coaching Chennai",
        "CBSE tuitions Chennai",
        "State Board tuitions Chennai",
        "NEET medical entrance coaching",
        "JEE main advanced coaching",
        "best tuition centre Anna Nagar",
        "tuition centre Velachery",
        "tuition centre Perambur",
        "tuition centre Tambaram"
    ],
    authors: [{ name: "Vels Plus Academy", url: siteUrl }],
    creator: "Vels Plus",
    publisher: "Ayatiworks",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: defaultTitle,
        description: defaultDescription,
        url: siteUrl,
        siteName: "Vels Plus Coaching Institute",
        images: [
            {
                url: '/assets/hero-banner.jpg',
                width: 1200,
                height: 630,
                alt: 'Vels Plus Coaching Institute Chennai',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: defaultTitle,
        description: defaultDescription,
        images: ['/assets/hero-banner.jpg'],
        creator: '@velsplus',
    },
};

// --- ROOT LAYOUT COMPONENT ---
interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={`${foundersGrotesk.variable} ${Baskervville.variable}`}>
            <body className="bg-white text-gray-900 font-sans">
                <JsonLd />
                <Header />
                <main>{children}</main>
                <FloatingIcons />
                <ScrollToTop />
                <Footer />
            </body>
        </html>
    );
}