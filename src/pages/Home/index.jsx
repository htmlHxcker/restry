import React from 'react';
import { FiEdit } from 'react-icons/fi';
import NavBar from '../../components/NavBar';
import tracks from '../../tracks';
import MusicPlayer from './components/MusicPlayer';
import StartPomodoro from './components/StartPomodoro';

function Home() {
  return (
    <>
      <NavBar />
      <StartPomodoro />
      <div className="flex justify-between footer">
        <button type="button" title="Create new to-do item">
          <FiEdit size={30} />
        </button>
        <MusicPlayer tracks={tracks} />

      </div>

    </>
  );
}

export default Home;
