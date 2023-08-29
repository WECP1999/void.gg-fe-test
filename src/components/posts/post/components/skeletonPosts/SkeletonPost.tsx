import { SkeletonRow } from '@/components/shared/table/style';
import * as S from '../style';

export default function SkeletonPost() {
  return (
    <S.PostContainer>
      <S.PostHeader>
        <SkeletonRow width="100px" height="100px" />
        <S.PostAuthorContainer>
          <SkeletonRow width="120px" />
          <br />
          <SkeletonRow width="120px" />
        </S.PostAuthorContainer>
      </S.PostHeader>
      <S.PostBody>
        <S.PostDescriptionContainer>
          <SkeletonRow width="100%" />
        </S.PostDescriptionContainer>
        <SkeletonRow width="50%" height="200px" />
      </S.PostBody>
    </S.PostContainer>
  );
}
