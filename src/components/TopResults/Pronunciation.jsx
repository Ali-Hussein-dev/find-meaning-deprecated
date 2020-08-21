import React, { createRef, useState } from "react";
import { get } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "@adobe/react-spectrum";

const Pronunciation = ({ linguaRobot }) => {
  let pronunciation = "";
  pronunciation =
    (get(linguaRobot, "data.entries[0].pronunciations") || [])
      .filter((o) => o.audio)
      .map((o) => o.audio.url)[0] || "";

  const audioRef = createRef();

  const playAudio = () => {
    audioRef.current.load();
    audioRef.current.play();
    console.log(audioRef.current.playing);
  };
  // not working ....
  const [isPlaying, setIsPlaying] = useState(false);

  if (pronunciation.length > 0) {
    return (
      <Flex>
        <audio
          ref={audioRef}
          onPlaying={() => {
            setIsPlaying(!isPlaying);
          }}
          onEnded={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          <source src={pronunciation} type="audio/mp3" />
          Your browser does not support the audio element!
        </audio>
        <button onClick={playAudio} className="audioBtn" disabled={isPlaying}>
          <FontAwesomeIcon
            icon={faVolumeUp}
            color="var(--brand-light)"
            disabled={isPlaying}
          />
        </button>
      </Flex>
    );
  } else {
    return <div></div>;
  }
};

export default Pronunciation;
