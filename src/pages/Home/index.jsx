import React from 'react';
import { FiEdit } from 'react-icons/fi';
import tracks from '../../tracks';
import MusicPlayer from './components/MusicPlayer';
import StartPomodoro from './components/StartPomodoro';

function Home() {
  return (
    <div className="grid">
      <div className="logo"><h1>Restry</h1></div>
      <div className="main"><StartPomodoro /></div>

      <button type="button" title="Create new to-do item" className="todo">
        <FiEdit size={30} />
      </button>
      <div className="player">
        <MusicPlayer tracks={tracks} />
      </div>

    </div>
  );
}

export default Home;
