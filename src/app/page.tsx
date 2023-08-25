'use client';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { increment } from '@/store/features/counterSlice';
import Header from '@/styles/styledComponents/header';

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <Header>{count}</Header>
      <button onClick={() => dispatch(increment())}>ADD</button>
    </>
  );
}
