import { ChevronUpIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            width: '2.5rem',
            height: '2.5rem',
            fontSize: '1.5rem',
            bottom: '1rem',
            right: '1rem',
            borderRadius: '100%',
            backgroundColor: '#2a41e8',
            color: '#fff',
          }}
        >
          <ChevronUpIcon />
        </button>
      )}
    </div>
  );
}
