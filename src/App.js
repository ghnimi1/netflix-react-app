import './App.css';
import RowComponenet from './components/RowCompoenet';
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

function App() {
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? ' darkmode' : '';

  return (
    <div className={"app" + (theme)}>
      <Nav />
      <Banner />
      <RowComponenet title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow />
      <RowComponenet title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <RowComponenet title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <RowComponenet title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <RowComponenet title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <RowComponenet title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <RowComponenet title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <RowComponenet title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>

  );
}

export default App;
