import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';
import { Button } from '../../components/Button';

import congratulationsImg from '../../assets/congratulations.svg';
import leaveRoomImg from '../../assets/enter-room.svg';

import { Container } from './styles';

export function Room() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLeaveRoom() {
    navigate('/rooms/new');
  }

  return (
    <Container>
      <header>
        <Button onClick={handleLeaveRoom} type="button">
          <img src={leaveRoomImg} alt="deixar sala" />
          Sair da sala
        </Button>
      </header>
      <div>
        <img
          className='avatar'
          src={user?.avatar}
          alt="foto do perfil do Google"
        />

        <img
          className='congratulations-img'
          src={congratulationsImg}
          alt="ilustração de boas vindas da sala"
        />
      </div>
    </Container>
  )
}