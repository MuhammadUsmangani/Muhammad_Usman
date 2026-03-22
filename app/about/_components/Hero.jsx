'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

import { MagneticButton, ParallaxReveal } from '@/components';

export function Hero() {
  return (
    <section className='bg-background px-6 pt-32 md:px-12 lg:px-24'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-[2fr,1fr] lg:gap-24'>
          <div className='flex flex-col justify-end'>
            <h1 className='text-[clamp(3.5rem,10vw,9.5rem)] font-medium leading-[1.1] tracking-tight text-foreground lg:max-w-4xl'>
              <ParallaxReveal paragraph='Helping brands thrive in the digital world' />
            </h1>
          </div>
          <div className='relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted lg:mt-24'>
            <motion.img
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
              src='/images/about_hero.png'
              alt='Professional Portrait'
              className='h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0'
            />
          </div>
        </div>

        <div className='relative mt-12 flex h-32 items-center justify-end border-t border-border/30'>
          <motion.div
            initial={{ scale: 0, x: 100, rotate: -45 }}
            whileInView={{ scale: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className='absolute -bottom-16 right-0'
          >
            <MagneticButton
              variant='primary'
              size='xl'
              className='flex size-48 items-center justify-center rounded-full bg-[#455CE9] text-white'
            >
              <div className='relative flex flex-col items-center gap-2'>
                <Globe size={40} strokeWidth={1} className='animate-pulse' />
                <span className='text-[10px] uppercase tracking-widest'>Globe</span>
              </div>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
