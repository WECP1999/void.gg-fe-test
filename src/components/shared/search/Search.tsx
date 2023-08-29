import { useEffect, useRef, useCallback, ChangeEvent, Dispatch } from 'react';
import SearchIcon from '../../../../public/search-icon.svg';
import { useSearchParams } from 'next/navigation';
import * as S from './components/style';

type SearchProps = {
  setPage: Dispatch<number>;
  setSearch: Dispatch<string>;
  setSearching: Dispatch<boolean>;
};

export default function Search({
  setPage,
  setSearch,
  setSearching,
}: SearchProps) {
  const params = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const debounce = useRef<NodeJS.Timeout>();

  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      clearTimeout(debounce.current);
      setSearching(true);
      debounce.current = setTimeout(() => {
        setSearch(e.target.value);
        setPage(1);
        history.pushState(
          {},
          '',
          window.location.pathname + '?search=' + e.target.value
        );
      }, 500);
    },
    [setSearch, setPage, setSearching]
  );

  useEffect(() => {
    const querySearch = params.get('search');
    if (querySearch && inputRef.current) {
      inputRef.current.value = querySearch;
    }
  }, [params]);

  return (
    <S.InputContainer>
      <S.Input
        ref={inputRef}
        onChange={onChangeInput}
        placeholder="Search for post name or author..."
      />
      <SearchIcon />
    </S.InputContainer>
  );
}
