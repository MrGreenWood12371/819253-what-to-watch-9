import MainPageScreen from '../main-page-screen/main-page-screen';

type AppScreenProps = {
  movieTitle: string;
  movieGenre: string;
  startDate: string;
}

function App({movieTitle, movieGenre, startDate}: AppScreenProps): JSX.Element {
  return (
    <MainPageScreen
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      startDate={startDate}
    />
  );
}

export default App;
