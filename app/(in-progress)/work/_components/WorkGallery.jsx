'use client';

import { useRef } from 'react';
import { useFollowPointer } from '@/hooks';
import {
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailList,
  ThumbnailModal,
} from '../../../_layout/thumbnail/components';
import { scaleUp } from '../../../_layout/thumbnail/variants';

export function WorkGallery() {
  const modal = useRef(null);
  const cursor = useRef(null);
  const label = useRef(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal,
    cursor,
    label,
  });

  return (
    <section
      className='container relative mb-32'
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      <div className='flex flex-col gap-10 mt-20'>
        <ThumbnailList
          handlePointerEnter={handlePointerEnter}
          handlePointerLeave={handlePointerLeave}
          moveItems={moveItems}
        />
        <ThumbnailModal
          ref={modal}
          variants={scaleUp}
          active={active}
          index={index}
        />
        <ThumbnailCursorCircle
          ref={cursor}
          variants={scaleUp}
          active={active}
        />
        <ThumbnailCursorLabel ref={label} variants={scaleUp} active={active}>
          View
        </ThumbnailCursorLabel>
      </div>
    </section>
  );
}
