import React, { useEffect, useState } from 'react';
import { generateImage } from '../services/geminiService';
import { Loader2, Image as ImageIcon } from 'lucide-react';

interface AIImageProps {
  prompt?: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

const AIImage: React.FC<AIImageProps> = ({ prompt, fallbackSrc, alt, className }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      if (!prompt) {
        setLoading(false);
        return;
      }

      // Check local storage for persistent caching
      const cached = localStorage.getItem(`img_${prompt.slice(0, 20)}`);
      if (cached) {
          setSrc(cached);
          setLoading(false);
          return;
      }

      setLoading(true);
      try {
        const generatedUrl = await generateImage(prompt);
        if (isMounted) {
          if (generatedUrl) {
            setSrc(generatedUrl);
            try {
                // Try to cache, but don't fail if quota exceeded
                localStorage.setItem(`img_${prompt.slice(0, 20)}`, generatedUrl);
            } catch (e) {
                console.warn("Storage full, skipping cache");
            }
          } else {
            setError(true);
          }
        }
      } catch (err) {
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}>
        <Loader2 className="animate-spin text-gray-400" />
      </div>
    );
  }

  if (error || !src) {
    if (fallbackSrc) {
      return <img src={fallbackSrc} alt={alt} className={className} />;
    }
    return (
      <div className={`bg-gray-100 flex flex-col items-center justify-center text-gray-400 p-4 ${className}`}>
        <ImageIcon size={32} />
        <span className="text-xs mt-2">Image unavailable</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} />;
};

export default AIImage;