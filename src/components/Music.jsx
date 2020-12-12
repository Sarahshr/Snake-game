import React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Player = styled.div``;

const Music = () => {
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(true);
  const [read, setRead] = useState(true);

  const handleMute = () => {
    setMute(!mute);
  };

  return (
    <>
      <Player>
        <ReactPlayer
          url="medias/music-game.mp3"
          playing="true"
          controls
          loop
          muted={mute}
        />
        <button onClick={handleMute}>{mute ? "vas-y" : "tg"}</button>
      </Player>
    </>
  );
};
export default Music;

/*
import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  });

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(true));
  }, [playing]);

  return [playing, toggle];
};

const Music = ({ url }) => {
  const [playing, toggle] = useAudio("./medias/music-game.mp3");

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Music;
*/
