// 'use client' is removed to allow metadata export in Next.js Server Component

import { Contact, Navbar, Transition } from '@/layout';

import { Awards } from './_components/Awards';
import { Hero } from './_components/Hero';
import { Intro } from './_components/Intro';
import { Services } from './_components/Services';

/** @type {import('next').Metadata} */
export const metadata = {
    title: 'About | Muhammad Usman',
    description:
        'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Muhammad Usman',
};

export default function AboutPage() {
    return (
        <Transition>
            <Navbar />
            <main className='min-h-screen bg-background pt-20'>
                <Hero />
                <Intro />
                <Services />
                <Awards />
            </main>
            <Contact />
        </Transition>
    );
}
