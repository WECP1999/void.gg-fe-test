import Image from 'next/image';
import { styled } from 'styled-components';
import tw from 'twin.macro';

export const PostContainer = tw.div`bg-[#18181b] flex flex-col w-full rounded border-2 border-collapse border-[rgb(46, 46, 49)]`;

export const PostHeader = tw.div`flex flex-row p-4 gap-4 border-b-2 border-collapse border-[rgb(46, 46, 49)]`;

export const PostBody = tw.div`flex flex-col p-4 gap-4 cursor-pointer`;

export const PostAuthorImage = styled(Image)`
  ${tw`rounded-3xl`}
`;

export const PostAuthorContainer = tw.div`flex flex-col font-bold justify-center`;

export const PostAuthor = tw.p`tracking-wider text-[0.9rem]`;

export const PostDate = tw.p`opacity-50 text-[0.75rem]`;

export const PostImage = styled(Image)``;

export const PostDescriptionContainer = styled.div``;

export const PostDescription = styled.div``;
