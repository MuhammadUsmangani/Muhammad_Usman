'use client';

import { Center } from '@/components';
import { cloudinaryUrl } from '@/utils/helpers/cloudinary-url';

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }) {
  const image =
    type === 'image' ? (
      <img
        src={cloudinaryUrl(source)}
        className='size-full object-cover'
        alt='project items'
      />
    ) : null;
  const video =
    type === 'video' ? (
      <video
        src={cloudinaryUrl(source)}
        loop
        muted
        autoPlay
        playsInline
        className='!static size-full !bg-transparent object-cover'
      />
    ) : null;

  return (
    <Center
      className='relative rounded aspect-[4/3] w-[150px] md:w-1/4 md:min-w-[150px] md:h-[20vw]'
    >
      {image}
      {video}
    </Center>
  );
}
