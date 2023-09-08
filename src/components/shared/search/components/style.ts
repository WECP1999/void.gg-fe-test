import { styled } from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  overflow: hidden;

  svg {
    position: absolute;
    width: 24px;
    top: 16px;
    left: 46px;
  }
`;

export const Input = styled.input`
  width: 400px;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  --tw-bg-opacity: 1;
  background-color: rgba(64, 64, 64, var(--tw-bg-opacity));
  padding: 1rem 48px;
  font-size: 16px;
  line-height: 20px;
  border-radius: 10px;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(64, 64, 64, var(--tw-border-opacity));
  outline: none;

  transition: all 0.4s ease;

  &:hover,
  &:focus {
    --tw-border-opacity: 1;
    border-color: rgba(96, 96, 96, var(--tw-border-opacity));
  }
`;
