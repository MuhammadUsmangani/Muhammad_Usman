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
    <section className='container mt-32 mb-16'>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='max-w-4xl overflow-hidden'>
          <motion.h1
            className='text-[clamp(3em,10vw,8em)] leading-[1.1] font-normal tracking-tight'
            variants={slideUp}
            initial='initial'
            animate='enter'
          >
            Creating next level digital products
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
