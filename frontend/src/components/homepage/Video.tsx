"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

interface VideoProps {
  url: string;
  width: string;
  height: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  playing?: boolean;
  ref?: any;
}
const Video: React.FC<VideoProps> = ({
  url,
  width,
  height,
  autoplay,
  loop,
  controls,
  playing,
  ref,
}) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) return null;

  return (
    <div className="w-full rounded-lg overflow-hidden">
      <ReactPlayer
        ref={ref}
        width={width}
        height={height}
        url={url}
        controls={controls}
        // light is useful incase of dark mode
        light={false}
        // picture in picture
        pip={true}
        muted={autoplay ? true : false}
        playing={playing}
        loop={loop}
        cal
      />
      <source src={url} type="video/mp4" />
    </div>
  );
};

export default Video;
