import { useEffect, useState } from 'react';
import { ButtonContainer } from './components/style';
import ArrowIcon from '../../../../public/arrow-up.svg';

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollBehavior = () => {
    if (window.scrollY > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollBehavior);

    return () => {
      window.removeEventListener('scroll', scrollBehavior);
    };
  }, []);

  return (
    <ButtonContainer className={showButton ? 'visible' : ''} onClick={goToTop}>
      <ArrowIcon />
    </ButtonContainer>
  );
}
