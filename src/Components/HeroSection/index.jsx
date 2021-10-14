import React, { useState } from "react";
import Video from "../../Videos/video.mp4";
import Video1 from "../../Videos/video1.mp4";
import Video2 from "../../Videos/video2.mp4";
import Video3 from "../../Videos/video3.mp4";
import Video4 from "../../Videos/video4.mp4";

import { Button } from "../ButtonElement";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [videos, setVideos] = useState([Video, Video1, Video2, Video3, Video4]);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={videos[Math.floor(Math.random() * (4 - 0 + 1)) + 0]}
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1> Kenzie Habit </HeroH1>
        <HeroP>
          Crie sua conta hoje, para desenvolver e acompanhar seus habitos
          favoritos
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
