import { Navbar, Transition } from '@/layout';
import { Hero } from './_components/Hero';
import { Form } from './_components/Form';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact | Muhammad Usman',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Muhammad Usman',
};

export default function Contact() {
  return (
    <Transition>
      <Navbar />
      <main className='min-h-screen bg-background pt-20'>
        <Hero />
        <Form />
      </main>
    </Transition>
  );
}
