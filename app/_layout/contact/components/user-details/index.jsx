'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper className='overflow-hidden rounded-full'>
            <img
              src='/images/user.jpg'
              className='absolute inset-0 size-full object-cover'
              alt='Muhammad Usman'
            />
          </ImageWrapper>
          <MainTitle>Let’s work</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>together</MainTitle>
          <div className='mt-6 opacity-40'>
            <ArrowUpRight size={60} strokeWidth={1} />
          </div>
        </div>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-px bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <div>
            <a href='mailto:info@muhammadusman.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground text-[12px] sm:text-base whitespace-nowrap px-4'
              >
                info@muhammadusman.com
              </MagneticButton>
            </a>
          </div>
          <div>
            <a href='tel:+31627847430'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full border-muted-foreground'
              >
                +31 6 27 84 74 30
              </MagneticButton>
            </a>
          </div>
        </div>
      </Row>
    </Container>
  );
}
