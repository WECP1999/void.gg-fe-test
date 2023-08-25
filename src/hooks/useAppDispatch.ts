import { useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
