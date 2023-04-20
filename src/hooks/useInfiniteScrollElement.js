import React from 'react';

export const ApplicationList: React.FC = () => {
  const containerRef = React.useRef(null);
  
  const handleScroll = React.useCallback(
    (e) => {
      const el = e.target;
      if (el.scrollTop + el.clientHeight >= el.scrollHeight && hasNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, fetchNextPage],
  );

  React.useEffect(() => {
    if (!containerRef.current) return;

    let observerRefValue = containerRef.current;
    observerRefValue.addEventListener('scroll', handleScroll);

    return () => {
      observerRefValue.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, handleScroll]);

  const applications = [];

  
  return { applications, containerRef } 
};
