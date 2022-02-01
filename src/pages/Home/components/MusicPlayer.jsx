import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

function MusicPlayer({ tracks }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    title, artist, image, audioSrc,
  } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const {duration} = audioRef.current;

  return (
    <>
      <p>Music Player</p>
      {tracks}
    </>
  );
}
MusicPlayer.propTypes = {
  tracks: PropTypes.arrayOf([]).isRequired,
};
export default MusicPlayer;
