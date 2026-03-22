'use client';

import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';

import { ParallaxFade } from '@/components';

export function Intro() {
  return (
    <section className='border-t border-border/20 bg-background px-6 py-24 md:px-12 lg:px-24'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='mb-24 flex items-center gap-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground'>
          <span className='opacity-60'>Intro</span>
          <MoveRight size={22} strokeWidth={1.5} className='opacity-60' />
        </div>

        <div className='grid grid-cols-1 gap-24 lg:grid-cols-[1fr,1.4fr]'>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            className='relative aspect-[3.5/4] overflow-hidden rounded-xl bg-secondary shadow-2xl'
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src='/images/about_intro.png'
              alt='Main Portrait'
              className='h-full w-full object-cover transition-all'
            />
          </motion.div>

          <div className='flex flex-col gap-24'>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className='relative aspect-video overflow-hidden rounded-xl bg-muted grayscale filter hover:grayscale-0 transition-all duration-700'
            >
              <img
                src='https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
                alt='Street Vibe'
                className='h-full w-full object-cover'
              />
            </motion.div>

            <div className='space-y-12 max-w-2xl'>
              <ParallaxFade>
                <h2 className='text-4xl font-normal leading-[1.2] text-foreground md:text-5xl lg:text-6xl'>
                  I am a freelance designer and developer based in The Dubai/UAE. I help brands thrive in the digital world.
                </h2>
              </ParallaxFade>
              <div className='h-[1px] w-24 bg-border/50' />
              <p className='text-xl leading-relaxed text-muted-foreground md:text-2xl'>
                The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
