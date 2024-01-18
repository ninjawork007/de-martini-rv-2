"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";

const Video: React.FC<ReactPlayerProps> = ({
  url,
  width,
  height,
  autoplay,
  loop,
  controls,
  playing,
  ref,
  fallback,
}) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) return null;

  return (
    <div className="w-full overflow-hidden">
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
        fallback={fallback}
      />
      {/* @ts-ignore */}
      <source src={url} type="video/mp4" />
    </div>
  );
};

export default Video;
