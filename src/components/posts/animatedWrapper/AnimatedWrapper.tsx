import { useRef, useEffect, useState, useCallback } from 'react';
import * as S from './components/style';

export default function AnimatedWrapper({ children }: PureFunctionProp) {
  const [animate, setAnimate] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      });
    });

    if (divRef && divRef.current) {
      observer.observe(divRef.current);
    }
  }, []);

  return (
    <S.AnimatedContainer animateDiv={animate} ref={divRef}>
      {children}
    </S.AnimatedContainer>
  );
}
