import { useEffect, useState } from 'react';

function usePlayer (videoRef: React.RefObject<HTMLVideoElement>) {
  const [videoState, setVideoState] = useState({
    isPlaying: false,
    progress: 0,
    duration: videoRef.current?.duration,
  });


  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if(videoState.isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

  }, [videoRef, videoState.isPlaying]);

  const handleFullScreenClick = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleOnTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) *
        100;
      setVideoState({
        ...videoState,
        duration:
          videoRef.current.duration - videoRef.current.currentTime,
        progress,
      });
    }
  };

  const handleVideoProgress = (evt: React.FormEvent<HTMLProgressElement>) => {
    if (videoRef.current) {
      const target = evt.target as HTMLProgressElement;
      const manualChange = Number(target.value);
      videoRef.current.currentTime =
        (videoRef.current.duration / 100) * manualChange;
      setVideoState({
        ...videoState,
        progress: manualChange,
      });
    }
  };

  const handleVideoPlay = () => {
    setVideoState({...videoState, isPlaying: !videoState.isPlaying});
  };

  return {
    videoState,
    handleVideoPlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleFullScreenClick,
  };
}

export default usePlayer;
