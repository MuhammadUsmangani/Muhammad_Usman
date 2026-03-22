'use client';

import { MagneticButton } from '@/components';

export function Form() {
  return (
    <section className='container mb-32 border-t border-muted-foreground pt-16'>
      <div className='flex flex-col md:flex-row gap-16'>
        <div className='md:w-1/3'>
          <img
            src='/images/user.jpg'
            alt='Muhammad Usman'
            className='w-32 h-32 rounded-full object-cover mb-8'
          />
          <h3 className='text-muted-foreground uppercase tracking-widest text-sm font-semibold mb-4'>
            Contact Details
          </h3>
          <p className='text-lg mb-2'>info@muhammadusman.com</p>
          <p className='text-lg mb-8'>+31 6 27 84 74 30</p>
          <h3 className='text-muted-foreground uppercase tracking-widest text-sm font-semibold mb-4'>
            Socials
          </h3>
          <ul className='flex gap-4'>
            <li><a href='#' className='underline'>Twitter</a></li>
            <li><a href='#' className='underline'>LinkedIn</a></li>
            <li><a href='#' className='underline'>GitHub</a></li>
          </ul>
        </div>
        <div className='md:w-2/3'>
          <form className='flex flex-col gap-10'>
            <div className='flex flex-col border-b border-muted-foreground pb-4'>
              <label htmlFor='name' className='text-muted-foreground text-sm uppercase tracking-widest mb-2'>What's your name?</label>
              <input type='text' id='name' placeholder='John Doe' className='bg-transparent text-2xl outline-none placeholder:text-muted-foreground/30' />
            </div>
            <div className='flex flex-col border-b border-muted-foreground pb-4'>
              <label htmlFor='email' className='text-muted-foreground text-sm uppercase tracking-widest mb-2'>What's your email?</label>
              <input type='email' id='email' placeholder='john@doe.com' className='bg-transparent text-2xl outline-none placeholder:text-muted-foreground/30' />
            </div>
            <div className='flex flex-col border-b border-muted-foreground pb-4'>
              <label htmlFor='message' className='text-muted-foreground text-sm uppercase tracking-widest mb-2'>Your message</label>
              <textarea id='message' placeholder='Hello Muhammad, can you help me with...' rows='4' className='bg-transparent text-2xl outline-none placeholder:text-muted-foreground/30 resize-none' />
            </div>
            <div className='self-start mt-8'>
              <MagneticButton variant='primary' size='lg' className='px-12'>
                Send <span className='opacity-0 gap-0'>It</span>
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
