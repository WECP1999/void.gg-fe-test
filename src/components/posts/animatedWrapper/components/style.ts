import { Wrapper } from '@/components/containers/layoutContainer';
import { styled } from 'styled-components';
import tw from 'twin.macro';

type AnimatedContainerProps = {
  animateDiv: boolean;
};

export const AnimatedContainer = styled.div<AnimatedContainerProps>`
  ${tw`w-full`}
  margin-top: ${({ animateDiv }) => (animateDiv ? '0' : '150px')};
  opacity: ${({ animateDiv }) => (animateDiv ? '1' : '0')};

  transition: all 0.4s ease 0s;
`;
