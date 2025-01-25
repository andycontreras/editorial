import { useEffect, useState } from 'react';

export function UseVisibleSection(sectionID) {
  const [visibleSection, setVisibleSection] = useState('');

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    });

    sectionID.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionID.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    };
  }, [sectionID]);
  return visibleSection;
}
