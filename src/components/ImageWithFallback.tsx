import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  loading = 'lazy',
}) => {
  const [error, setError] = useState(false);
  return (
    <div
      className={`relative bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden border-2 border-black dark:border-white ${className}`}
    >
      {error ? (
        <div className="flex flex-col items-center justify-center text-center p-4">
          <span className="material-icons text-6xl mb-2 opacity-20">warning_amber</span>
          <p className="font-display text-2xl uppercase opacity-40">SIGNAL LOST</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          className="w-full h-full object-contain"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};
