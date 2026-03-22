'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Design',
    description:
      'With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the starting point.',
  },
  {
    id: '02',
    title: 'Development',
    description:
      'I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For build specialized CMS or custom business applications.',
  },
  {
    id: '03',
    title: 'The full package',
    description:
      'A complete website from concept to implementation, that s what I like to do most. Which leads to a better result for you and me.',
    hasIcon: true,
  },
];

export function Services() {
  return (
    <section className='bg-background px-6 py-32 md:px-12 lg:px-24'>
      <div className='mx-auto max-w-[1400px]'>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='mb-24 text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-foreground'
        >
          I can help you with...
        </motion.h2>

        <div className='grid grid-cols-1 border-t border-border/30 md:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='group relative flex cursor-default flex-col gap-12 border-b border-border/30 p-10 transition-all duration-700 hover:bg-foreground hover:text-background md:border-b-0 md:border-r last:md:border-r-0'
            >
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium opacity-40 group-hover:opacity-100'>
                  {service.id}
                </span>
                {service.hasIcon && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className='text-[#455CE9] group-hover:text-background'
                  >
                    <Star size={28} strokeWidth={1.5} />
                  </motion.div>
                )}
              </div>
              <div className='flex flex-col gap-8'>
                <h3 className='text-4xl font-normal leading-tight'>{service.title}</h3>
                <p className='text-lg leading-relaxed opacity-60 transition-opacity group-hover:opacity-100'>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
