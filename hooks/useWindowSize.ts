import { useEffect, useState } from 'react';

function useWindowSize() {
  const [windowXSize, setWindowXSize] = useState<[number]>([window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowXSize([window.innerWidth]);
    };
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowXSize;
}

export default useWindowSize;
