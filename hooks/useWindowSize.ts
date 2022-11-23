import { useEffect, useState } from 'react';

function useWindowSize() {
  const [windowXsize, setWindowXsize] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth) {
        setWindowXsize(window.innerWidth);
      }
    }

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowXsize;
}

export default useWindowSize;
