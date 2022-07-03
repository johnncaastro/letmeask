import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  
  aside {
    flex: 7;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 8rem 8.5rem 8rem 5rem;

    background-color: var(--purple);

    > img {
      max-width: 320px;
    }

    h1 {
      margin-top: 0.5rem;

      color: var(--white);
      font-size: 1.6rem;
    }

    p {
      margin-top: 1rem;

      color: var(--white);
      font-size: 1rem;
    }
  }

  main {
    flex: 8;
    display: flex;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    max-width: 320px;

    > button {
      width: 100%;
    }

    form {
      width: 100%;
      
      button, input {
        width: 100%;
        height: 50px;
      }

      input {
        border: 1px solid var(--gray-light);
        border-radius: 0.5rem;
        padding: 0.8rem 1rem;
        margin-bottom: 1rem;
      }
    }
  }

  .create-room {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    margin-top: 3.5rem;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;

    background-color: var(--red);
    color: var(--white);
    font-size: 1rem;
    font-weight: 500;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .separator {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;

    font-size: 0.8rem;
    color: var(--gray-light);

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      margin-right: 1rem;
      color: var(--gray-light);
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      margin-left: 1rem;
      color: var(--gray-light);
    }
  }

  @media (max-width: 920px) {
    aside {
      display: none;
    }
  }
`