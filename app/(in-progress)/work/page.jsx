import { Contact, Navbar, Transition } from '@/layout';
import { Hero } from './_components/Hero';
import { WorkGallery } from './_components/WorkGallery';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work | Muhammad Usman',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Muhammad Usman',
};

export default function Work() {
  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background pt-20'>
        <Hero />
        <WorkGallery />
      </main>
      <Contact />
    </Transition>
  );
}
