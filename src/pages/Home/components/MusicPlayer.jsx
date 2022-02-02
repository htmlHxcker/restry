import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FiPause, FiPlay } from 'react-icons/fi';

function MusicPlayer({ tracks }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    title, artist, audioSrc,
  } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };
  audioRef.current.addEventListener('ended', () => {
    toNextTrack();
  });

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(
    () => () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    },
    [],
  );

  return (
    <div className="flex items-center">
      <div>
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
      </div>

      {isPlaying ? (
        <button
          type="button"
          className="pause"
          onClick={() => setIsPlaying(false)}
          aria-label="Pause"
        >
          <FiPause />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => setIsPlaying(true)}
          aria-label="Play"
        >
          <FiPlay />
        </button>
      )}
    </div>
  );
}

MusicPlayer.propTypes = {
  tracks: PropTypes.arrayOf([]).isRequired,
};

export default MusicPlayer;
