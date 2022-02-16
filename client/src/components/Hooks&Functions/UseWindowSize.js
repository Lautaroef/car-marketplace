import { useEffect, useState } from 'react';

function UseWindowSize() {
  const [innerWidth, setInnerWidth] = useState([window.innerWidth]);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth([window.innerWidth]);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return innerWidth;
}

export default UseWindowSize;
