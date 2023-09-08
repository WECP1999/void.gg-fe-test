import IPost from '@/interfaces/IPost';
import AnimatedWrapper from '../animatedWrapper/';
import readableDate from '@/utils/functions/readableDate';
import * as S from './components/style';
import { useRouter } from 'next/navigation';

type PostProps = {
  post: IPost;
};

export default function Post({ post }: PostProps) {
  const router = useRouter();

  return (
    <AnimatedWrapper>
      <S.PostContainer>
        <S.PostHeader>
          <S.PostAuthorImage
            src={post.authorAvatar}
            alt="author avatar"
            width={50}
            height={50}
          />
          <S.PostAuthorContainer>
            <S.PostAuthor>{post.authorName}</S.PostAuthor>
            <S.PostDate>{readableDate(post.createdAt)}</S.PostDate>
          </S.PostAuthorContainer>
        </S.PostHeader>
        <S.PostBody onClick={() => router.push(`/posts/${post.id}`)}>
          <S.PostDescriptionContainer>
            <S.PostDescription>{post.postText}</S.PostDescription>
          </S.PostDescriptionContainer>
          <S.PostImage
            src={post.postImage}
            alt={post.id + ' post image'}
            width={400}
            height={400}
          />
        </S.PostBody>
      </S.PostContainer>
    </AnimatedWrapper>
  );
}
