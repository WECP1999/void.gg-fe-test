import { styled, keyframes } from 'styled-components';
import tw from 'twin.macro';

export const Table = tw.table`
    w-full
    border-collapse
    text-center
    border-spacing-0.5
    bg-[#18181b]
    rounded
`;

export const THead = styled.thead`
  & > tr {
    th {
      ${tw`p-4 font-bold text-[0.75rem] leading-[1.3] text-white opacity-50`}
      &:nth-child(1) {
        ${tw`text-left w-12`}
      }
      &:nth-child(2) {
        ${tw`w-full text-left`}
      }
    }
  }
`;

export const TBody = styled.tbody`
  & > tr {
    ${tw`relative border-t-[1px] border-b-[1] border-collapse border-t-[rgb(46, 46, 49)] border-b-[rgb(46, 46, 49)]`}
    background-position: left center;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.05) 0px,
      rgba(255, 255, 255, 0.05) 0px
    );
    background-repeat: no-repeat;
    background-size: 0;
    transition:
      all 0.3s ease-in-out 0s,
      background-position 0s ease 0s;

    &:hover {
      background-size: 100%;
    }

    &.anonymized {
      background-image: linear-gradient(
        rgba(227, 227, 227, 0.25) 0px,
        rgba(227, 227, 227, 0.25) 0px
      );
      background-size: 100%;
      cursor: default !important;
      td {
        cursor: default !important;
        opacity: 0.5;
      }
    }
    td {
      ${tw`p-4 font-bold text-[0.85rem] leading-4 text-white cursor-pointer`}

      &.rank-1, &.rank-2, &.rank-3 {
        font-weight: 800 !important;
        opacity: 1 !important;
      }

      &.rank-1 {
        ${tw`text-[#facc15]`}
      }

      &.rank-2 {
        ${tw`text-gray-300`}
      }

      &.rank-3 {
        ${tw`text-amber-600`}
      }

      &:first-child {
        ${tw`opacity-50 font-medium`}
      }

      &:nth-child(2) {
        ${tw`text-left`}
      }
    }
  }
`;

export const Chip = tw.span`rounded-3xl w-fit px-2 py-1 opacity-50 border-white border-[1px] text-[0.75rem] leading-3`;

type SkeletonRowProps = { width: `${number}${'px' | 'em'}` };

const pulseAnimation = keyframes`
  from{
    opacity: 0.5;
  }
  to{
    opacity: 1;
  }
`;

export const SkeletonRow = styled.div<SkeletonRowProps>`
  ${tw`bg-[rgb(46, 46, 49)] h-4 rounded`}
  width: ${(props) => props.width};
  animation: ${pulseAnimation} 0.5s infinite alternate;
`;
