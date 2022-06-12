import React, { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import { ButtonComponent } from '../../components/Button/styles';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';

import { Container } from "./styles";

export function CreateRoom() {
  const { user } = useContext(AuthContext);

  const [newRoom, setNewRoom] = useState('');

  const navigate = useNavigate();

  function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoom.trim() === '') {
      alert('Informe um nome para a sala!')
      return;
    }

    navigate(`/rooms/${newRoom}`);
  }

  return (
    <Container>
      <aside>
        <img
          src={illustrationImg}
          alt="ilustração simbolizando perguntas e respostas"
        />

        <h1>Toda pergunta tem uma resposta.</h1>
        <p>
          Aprenda e compartilhe conhecimento com outras pessoas
        </p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={logoImg} alt="logo letmeask" />
          <h1>{user?.name}</h1>
          <h2>Crie uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder='Nome da sala'
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <ButtonComponent type='submit'>
              Criar sala
            </ButtonComponent>

            <p>
              Quer entrar em uma sala já existente?
              <Link to='/'>
                clique aqui
              </Link>
            </p>
          </form>
        </div>
      </main>
    </Container>
  )
}