import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import getCurrentTime from '../../config/getCurrentTime';

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

    </>
  );
}

export default Home;
