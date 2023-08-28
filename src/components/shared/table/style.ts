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

  &.players {
    th:nth-child(1) {
      ${tw`text-left w-12`}
      &.team-title {
        ${tw`relative text-[0.8rem] font-bold opacity-[1]`}
        &.blue {
          ${tw`text-[rgb(27, 155, 197)]`}
        }
        &.red {
          ${tw`text-[rgb(255, 70, 85)]`}
        }
        text-align: center;
      }
    }
    th:nth-child(2) {
      ${tw`w-auto text-right`}
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

    &.skeleton {
      &:hover {
        background-size: 0;
      }
      td {
        ${tw`cursor-default`}
      }
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

  &.players > tr {
    td {
      ${tw`opacity-100`}
    }
  }
`;

type SkeletonRowProps = {
  width: `${number}${'px' | 'em' | '%'}`;
  height?: `${number}${'px' | 'em' | '%'}`;
};

const pulseAnimation = keyframes`
  from{
    opacity: 0.5;
  }
  to{
    opacity: 1;
  }
`;

export const SkeletonRow = styled.div<SkeletonRowProps>`
  ${tw`bg-[rgb(46, 46, 49)] rounded cursor-default `}
  width: ${(props) => props.width};
  height: ${(props) => props.height ?? '1rem'};
  animation: ${pulseAnimation} 0.5s infinite alternate;
`;
