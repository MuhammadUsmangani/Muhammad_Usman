/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://muhammad-usman-portfolio.vercel.app/'),
  title: {
    template: '%s | Muhammad Usman',
    default: 'Muhammad Usman • Freelance Designer & Developer',
  },
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Muhammad Usman',
  generator: 'Muhammad Usman',
  applicationName: 'Muhammad Usman',
  referrer: 'origin-when-cross-origin',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Develope', 'Freelance'],
  authors: [
    { name: 'Muhammad Usman', url: 'https://www.github.com/muhammadusman' },
  ],
  creator: 'Muhammad Usman',
  publisher: 'Muhammad Usman',
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Usman',
    description:
      'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Muhammad Usman',
    siteId: '1467726470533754880',
    creator: '@muhammadusman',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://muhammad-usman-portfolio.vercel.app/screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
