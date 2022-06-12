import styled from 'styled-components';

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;

  background-color: var(--purple);
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`