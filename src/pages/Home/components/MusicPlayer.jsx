import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiPause, FiPlay } from 'react-icons/fi';

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

  const { duration } = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  audioRef.current.addEventListener('ended', () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  });

  return (
    <div className="flex">
      <img src={image} alt={`Cover art for ${title} by ${artist}`} className="cover-art" />
      <div>
        <h2>{title}</h2>
        <h3>{artist}</h3>
      </div>
      <div className="flex">
        {isPlaying ? (
          <button type="button" aria-label="Play" onClick={() => { setIsPlaying(true); }}><FiPlay /></button>
        ) : (
          <button type="button" aria-label="Pause" onClick={() => { setIsPlaying(false); }}><FiPause /></button>
        )}
      </div>
    </div>
  );
}
MusicPlayer.propTypes = {
  tracks: PropTypes.arrayOf([]).isRequired,
};
export default MusicPlayer;
