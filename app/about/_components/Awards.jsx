'use client';

import { motion } from 'framer-motion';

export function Awards() {
  return (
    <section className='border-t border-border/20 bg-background px-6 py-32 md:px-12 lg:px-24'>
      <div className='mx-auto grid max-w-[1400px] grid-cols-1 gap-24 lg:grid-cols-[1fr,1.3fr]'>
        <div className='relative'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className='relative aspect-[3.8/5] overflow-hidden rounded-2xl bg-muted shadow-2xl'
          >
            <img
              src='/images/about_02.png'
              alt='Awwwards Sitting Portrait'
              className='h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0'
            />
          </motion.div>
          {/* Awwwards Badge */}
          <motion.div
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, type: 'spring' }}
            className='absolute -bottom-10 -right-10 hidden size-40 items-center justify-center rounded-full bg-foreground p-8 text-background shadow-2xl lg:flex'
          >
            <div className='flex flex-col items-center gap-1 text-center'>
              <span className='text-[8px] font-bold uppercase tracking-[0.3em] opacity-60'>Official</span>
              <span className='text-4xl font-extrabold leading-none'>W.</span>
              <span className='text-[7px] font-bold uppercase tracking-[0.2em] opacity-60'>Jury 2024</span>
            </div>
          </motion.div>
        </div>

        <div className='flex flex-col justify-center space-y-12'>
          <div className='space-y-6'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.1] text-foreground'
            >
              Awwwards Design Inspiration
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='max-w-xl text-xl leading-relaxed text-muted-foreground md:text-2xl'
            >
              My work is inspired by modern web design standards from platforms like Awwwards and CSS Design Awards, focusing on interactive experiences and clean UI.s
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='space-y-8'
          >
            <div className='h-[1px] w-24 bg-border/50' />
            <div className='space-y-6'>
              <span className='text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground opacity-60'>
                Tech & Tools I Practice
              </span>
              <div className='flex flex-wrap gap-x-10 gap-y-6 text-2xl font-normal lg:text-3xl'>
                <span className='transition-all duration-300 hover:text-primary'>Webflow</span>
                <span className='opacity-20'>/</span>
                <span className='transition-all duration-300 hover:text-primary'>Kirby CMS</span>
                <span className='opacity-20'>/</span>
                <span className='transition-all duration-300 hover:text-primary'>Interaction Design</span>
                <span className='opacity-20'>/</span>
                <span className='transition-all duration-300 hover:text-primary'>GSAP (Stitch)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
