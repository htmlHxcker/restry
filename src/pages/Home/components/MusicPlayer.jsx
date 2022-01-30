import React from 'react';
import PropTypes from 'prop-types';

function MusicPlayer({ tracks }) {
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
