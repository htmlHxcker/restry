import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import NavBar from '../../components/NavBar';
import getCurrentTime from '../../config/getCurrentTime';
import MusicPlayer from './components/MusicPlayer';
import StartPomodoro from './components/StartPomodoro';

function Home() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  setInterval(() => {
    setCurrentTime(getCurrentTime);
  }, 1000);

  return (
    <>
      <NavBar />
      <div>
        <h2>{currentTime.time}</h2>
        <h3>{currentTime.greeting}</h3>
      </div>
      <StartPomodoro />
      <div className="flex justify-between footer">
        <button type="button" title="Create new to-do item">
          <FiEdit size={30} />
        </button>
        <MusicPlayer />
      </div>

    </>
  );
}

export default Home;
