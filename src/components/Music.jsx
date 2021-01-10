import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Player = styled.div`
  display: none;
`;

const Icon = styled.span`
  font-size: 30pt;
  color: yellow;
  cursor: pointer;
`;

const Music = () => {
  const [mute, setMute] = useState(true);

  const handleMute = () => {
    setMute(!mute);
  };

  return (
    <>
      <Player>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dm4aY08bf4Q"
          playing
          controls
          loop
          muted={mute}
        />
      </Player>
      <Icon onClick={handleMute}>
        {mute ? (
          <i className="fas fa-volume-slash"></i>
        ) : (
          <i className="fas fa-volume-up"></i>
        )}
      </Icon>
    </>
  );
};

export default Music;
