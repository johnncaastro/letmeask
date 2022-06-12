import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  header {
    display: flex;
    justify-content: end;

    padding: 1rem 2rem;
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .congratulations-img {
    width: 100%;
    max-width: 420px;
  }

  .avatar {
    border-radius: 50%;
  }
`