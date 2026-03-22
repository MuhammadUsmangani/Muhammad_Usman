'use client';

import { MagneticButton } from '@/components';

export function Form() {
  return (
    <section className='container mb-32 border-t border-muted-foreground pt-16'>
      <div className='flex flex-col gap-16 md:flex-row'>
        <div className='md:w-1/3'>
          <img
            src='/images/user.jpg'
            alt='Muhammad Usman'
            className='mb-8 size-32 rounded-full object-cover'
          />
          <h3 className='mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground'>
            Contact Details
          </h3>
          <p className='mb-2 text-lg'>info@muhammadusman.com</p>
          <p className='mb-8 text-lg'>+31 6 27 84 74 30</p>
          <h3 className='mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground'>
            Socials
          </h3>
          <ul className='flex gap-4'>
            <li>
              <a href='#' className='underline'>
                Twitter
              </a>
            </li>
            <li>
              <a href='#' className='underline'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='#' className='underline'>
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className='md:w-2/3'>
          <form className='flex flex-col gap-10'>
            <div className='flex flex-col border-b border-muted-foreground pb-4'>
              <label
                htmlFor='name'
                className='mb-2 text-sm uppercase tracking-widest text-muted-foreground'
              >
                What&apos;s your name?
              </label>
              <input
                type='text'
                id='name'
                placeholder='John Doe'
                className='bg-transparent text-2xl outline-none placeholder:text-muted-foreground/30'
              />
            </div>
            <div className='flex flex-col border-b border-muted-foreground pb-4'>
              <label
                htmlFor='email'
                className='mb-2 text-sm uppercase tracking-widest text-muted-foreground'
              >
                What&apos;s your email?
              </label>
              <input
                type='email'
                id='email'
                placeholder='john@doe.com'
                className='bg-transparent text-2xl outline-none placeholder:text-muted-foreground/30'
              />
            </div>
            <div className='flex flex-col border-b border-muted-foreground pb-4'>
              <label
                htmlFor='message'
                className='mb-2 text-sm uppercase tracking-widest text-muted-foreground'
              >
                Your message
              </label>
              <textarea
                id='message'
                placeholder='Hello Muhammad, can you help me with...'
                rows='4'
                className='resize-none bg-transparent text-2xl outline-none placeholder:text-muted-foreground/30'
              />
            </div>
            <div className='mt-8 self-start'>
              <MagneticButton variant='primary' size='lg' className='px-12'>
                Send <span className='gap-0 opacity-0'>It</span>
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
