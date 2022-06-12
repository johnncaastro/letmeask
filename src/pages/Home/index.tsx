import React, { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { ButtonComponent } from '../../components/Button/styles';

import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';
import enterRoomImg from '../../assets/enter-room.svg';

import { Container } from "./styles";

export function Home() {
  const { user, signInWithGoogle } = useContext(AuthContext);

  const [roomCode, setRoomCode] = useState('');

  const navigate = useNavigate();

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle();
    }

    navigate('/rooms/new');
  }

  function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if(roomCode.trim() === '') {
      alert('Informe um nome para a sala!')
      return;
    }

    navigate(`/rooms/${roomCode}`);
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

          
          <button
            type='button'
            className='create-room'
            onClick={handleCreateRoom}
          >
            <img src={googleIconImg} alt="ícone do Google" />
            Crie sua sala com o Google
          </button>

          <div className='separator'>ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder='Digite o código da sala'
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <ButtonComponent type='submit'>
              <img src={enterRoomImg} alt="ícone de entrar na sala" />
              Entrar na sala
            </ButtonComponent>
          </form>
        </div>
      </main>
    </Container>
  )
}