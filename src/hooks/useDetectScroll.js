import { useEffect, useState } from 'react';

export const useDetectScroll = (pixelsToScroll) => {
  // DETECT USER SCROLLING TO ADD BLURRED BG BEHIND THE NAVBAR
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    setScroll(window.scrollY > pixelsToScroll);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return { scroll };
};
