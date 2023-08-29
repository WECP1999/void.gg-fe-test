import { styled } from 'styled-components';
import tw from 'twin.macro';

export const TitleContainer = styled.div`
  ${tw`flex flex-row w-full items-end`}

  svg {
    ${tw`-ml-8`}
  }
`;

export const Title = tw.h1`
    text-5xl
    font-bold
    tracking-wide
`;

export const Subtitle = tw.h2`md:pb-[40px] sm:pb-[40px] lg:pb-[60px] pb-[40px] w-full pt-2 text-4xl font-bold`;

export const TableHeader = tw.h3`md:pb-[40px] sm:pb-[40px] lg:pb-[60px] pb-[40px] text-2xl font-bold`;
