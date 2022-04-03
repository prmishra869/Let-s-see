
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      {/* NAV */}
     <Nav />
     <Banner />
     <Row title="Let's see Originals" 
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow                                /*We are passing this as a parameter in Let's see original because we want this particular row to be enlarged compared 
                                               to other rows//////isLargeRow={true} by default but we don't need to write it because by default it is present we may write also */ 
     />
     <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     
    </div>
  );
}

export default App;
 