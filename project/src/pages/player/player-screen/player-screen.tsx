import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppselector } from '../../../hooks';
import { Film } from '../../../types/films';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import LoadingScreen from '../../loading-screen/loading-screen';
import usePlayer from '../../../hooks/use-player';
dayjs.extend(duration);

function PlayerScreen() {
  const params = useParams();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const {
    videoState,
    handleVideoPlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleFullScreenClick,
  } = usePlayer(videoRef);

  const {films, isDataLoaded} = useAppselector(({DATA}) => DATA);
  const film = films.find((el) => `${el.id}` === params.id);

  const {videoLink, backgroundImage, runTime, name} = film as Film;
  const navigate = useNavigate();

  if (!isDataLoaded || !film) {
    return <LoadingScreen/>;
  }

  const filmDuration = dayjs.duration(
    videoState.duration || runTime,
    'seconds',
  );

  const formatedFilmDuration =
    filmDuration.asHours() >= 1
      ? filmDuration.format('-HH:mm:ss')
      : filmDuration.format('-mm:ss');

  return (
    <div className="player">
      <video
        className="player__video"
        src={videoLink}
        poster={backgroundImage}
        ref={videoRef}
        onTimeUpdate={handleOnTimeUpdate}
      />

      <button onClick={() => {navigate(-1);}} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              onChange={(evt) => handleVideoProgress(evt)}
              value={videoState.progress} max="100"
            >
            </progress>
            <div
              className="player__toggler"
              style={{ left: `${videoState.progress}%` }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{formatedFilmDuration}</div>
        </div>

        <div className="player__controls-row">
          <button
            onClick={handleVideoPlay}
            type="button"
            className="player__play"
          >
            {!videoState.isPlaying ?
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg><span>Play</span>
              </>
              :
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg><span>Pause</span>
              </>}
          </button>
          <div className="player__name">{name}</div>

          <button onClick={handleFullScreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
