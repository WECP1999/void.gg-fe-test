import tw from 'twin.macro';
import styled from 'styled-components';

export const LayoutContainer = tw.div`
    bg-[#000000]
    relative
    min-h-[100vh]
    text-white
    pt-16
`;

export const Wrapper = styled.div`
  ${tw`flex flex-col h-auto ml-auto mr-auto items-center justify-center py-20`}

  @media (min-width: 320px) {
    ${tw`w-[272px]`}
  }
  @media (min-width: 375px) {
    ${tw`w-[327px]`}
  }
  @media (min-width: 425px) {
    ${tw`w-[377px]`}
  }
  @media (min-width: 768px) {
    ${tw`w-[688px]`}
  }
  @media (min-width: 1024px) {
    ${tw`w-[792px]`}
  }
  @media (min-width: 1440px) {
    ${tw`w-[1170px]`}
  }
`;
