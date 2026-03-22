'use client';

import { motion } from 'framer-motion';

const slideUp = {
  initial: {
    y: '100%',
  },
  enter: {
    y: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export function Hero() {
  return (
    <section className='container mb-16 mt-32'>
      <div className='flex flex-col justify-between md:flex-row'>
        <div className='max-w-4xl overflow-hidden'>
          <motion.h1
            className='text-[clamp(3em,10vw,8em)] font-normal leading-[1.1] tracking-tight'
            variants={slideUp}
            initial='initial'
            animate='enter'
          >
            Let&apos;s start a project together
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
