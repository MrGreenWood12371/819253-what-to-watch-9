import { useEffect, useRef, useState } from 'react';

type PlayerProps = {
  src: string;
  posterImage: string;
  isActive: boolean;
  isPreview: boolean;
}

function Player({src, posterImage, isActive, isPreview}: PlayerProps) {
  const [, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current !== null) {
      videoRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if (videoRef.current !== null){
        videoRef.current.onloadeddata = null;
        videoRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isActive) {
      videoRef.current.muted = isPreview;
      videoRef.current.play();
    }

    if (!isActive) {
      videoRef.current.load();
    }

  }, [isActive]);

  return (
    <video
      className="player__video"
      src={src}
      poster={posterImage}
      ref={videoRef}
    />
  );
}

export default Player;
