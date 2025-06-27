'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

type ImageSliderProps = {
  images: string[];
  interval?: number; // интервал в миллисекундах, по умолчанию 3000
};

export default function ImageSlider({ images, interval = 3000 }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // очищаем при размонтировании
  }, [images.length, interval]);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden bg-white">
      <div className="relative w-full h-64 sm:h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0.30 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 1.8 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Image ${index}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
