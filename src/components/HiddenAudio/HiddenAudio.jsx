import React, { useEffect, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';

import { music } from '../../assets';

const HiddenAudio = () => {
  const audio = useRef(null);
  const [loop, setLoop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusicEnded = useCallback(() => {
    setLoop((prev) => (prev === 3 ? 0 : ++prev));
  }, []);

  const handleAudio = () => {
    setIsPlaying((prev) => !prev);
    if (audio.current.paused) audio.current.play();
    else audio.current.pause();
  };

  useEffect(() => {}, [loop, handleMusicEnded, audio]);

  return (
    <Wrapper>
      <Audio
        ref={audio}
        src={music[loop]}
        type='audio/mpeg'
        onEnded={handleMusicEnded}
      />
      <Button onClick={handleAudio} />
    </Wrapper>
  );
};

export default HiddenAudio;

const Wrapper = styled.div``;

const Audio = styled.audio`
  width: 100px;
  background-color: black;
`;

const Button = styled.div`
  position: absolute;
  top: 44px;
  left: 146px;
  text-align: center;
  line-height: 60px;
  width: 100px;
  height: 60px;
  border: none;
  font-weight: 500;
  color: '#333';
  cursor: pointer;
`;
