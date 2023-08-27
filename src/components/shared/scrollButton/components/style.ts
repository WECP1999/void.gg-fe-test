import { styled, keyframes } from 'styled-components';
import tw from 'twin.macro';

const animation = keyframes`
  0%{
    transform: translateY(0);
  }
  25%{
    transform: translateY(5px);
  }
  50%{
    transform: translateY(0);
  }
  75%{
    transform: translateY(-5px);
  }
  100%{
    transform: translateY(0px);
  }
`;

export const ButtonContainer = styled.button`
  ${tw`fixed invisible bottom-[-40px] right-6 z-20 cursor-pointer outline-none bg-[transparent] text-white rounded p-2`}
  animation: ${animation} 2s ease-in-out infinite;
  transition: all 0.2s ease-in-out;

  &.visible {
    ${tw`bottom-10 visible`}
  }
  &:hover {
    ${tw`bg-[rgb(94, 92, 230)]`}
    animation-play-state: paused;
  }
  svg {
    ${tw`w-8 h-8 fill-white`}
  }
`;
