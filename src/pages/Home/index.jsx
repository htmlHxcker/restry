import React from 'react';
import Tasks from './components/Tasks';
import Pomodoro from './components/Pomodoro';
import './home.scss';

function Home() {
  return (
    <div className="flex home">
      <Tasks />
      <Pomodoro />
    </div>
  );
}

export default Home;
