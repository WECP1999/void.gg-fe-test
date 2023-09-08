import * as S from './components/style';
import VoidIcon from '../../../../public/void.svg';
import Link from 'next/link';

export default function NavBar() {
  return (
    <S.Nav>
      <S.HomeIcon>
        <Link href="/">
          <VoidIcon />
        </Link>
      </S.HomeIcon>
      <S.LinkContainer>
        <S.LinkList>
          <Link href="/">Home</Link>
        </S.LinkList>
        <S.LinkList>
          <Link href="/posts">Posts</Link>
        </S.LinkList>
      </S.LinkContainer>
    </S.Nav>
  );
}
