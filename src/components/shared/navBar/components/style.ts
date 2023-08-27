import tw from 'twin.macro';
import styled from 'styled-components';

export const Nav = styled.nav`
  ${tw`fixed top-0 left-0 right-0 z-10 box-border flex flex-auto flex-row justify-between items-center py-4 px-6 bg-[#18181b]`}

  li > a {
    ${tw`p-2 rounded-md`}
    &:hover {
      ${tw`bg-[rgb(94, 92, 230)]`}
    }
    transition: all ease 0.2s;
  }
`;

export const HomeIcon = styled.div`
  a {
    ${tw`text-[#5e5ce6] w-[4.25rem] h-[1.25rem] cursor-pointer flex justify-center`}
  }
`;

export const LinkContainer = tw.ul`
    flex
    flex-row
    gap-4
    justify-center
    list-none
    p-0
    m-0
`;

export const LinkList = tw.li`
    m-0
    font-bold
`;
