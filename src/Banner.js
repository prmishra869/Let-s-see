import React, { useState,useEffect } from 'react';
import axios from './axios';                                         /*for Importing our request from baseurl*/
import requests from './requests';                                   /*For fetching originals section*/ 
import "./Banner.css";
function Banner() {
    const [movie, setMovie] = useState([]);                         /*Setting state which is responsible for whatever movie is selected on the top */
                                                                   /*useEffect is a piece of code which runs based on a given condition condition here it will run once when Banner component loads 
                                                                   thats why at last Bracket is empty []*/ 
    useEffect(()=>{
        async function fetchData(){                                /*Anything which makes a call to external API*/
                                                                  /*We want to fetch Originals poster only for our Banner and that too it must be selected randomly */
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)
        ]
        );                                                       /*This line will select a random banner from NetflixOriginals */
          return request;
        }      
        fetchData();
    }, []);
    console.log(movie);
                                                                /*Function to truncate the extra description to truncate or hide after n characters and put ... there*/
    function truncate(str,n){                                   /*take a string and a number n as parameter */
      return str?.length>n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
                  /*  { *<<<<Background image/} */
/*banner classname is applied for the banner in background */
/*banner__contents classname is applied for the content over the banner */
/*banner header must be such that its style must be as defined below */

    <header className="banner"
     style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
          backgroundPosition:"center center",
     }}
     >
      <div className="banner__contents">
      
      
          
        {/* title */}
        <h1 className="banner__title">
           
          {movie?.title || movie?.name || movie?.original_name}  {/*Some movie will show the title if present otherwise name and if it is
                                                                 also not present then it shows original_name */}

        </h1>
        {/*div 2 buttons one for play other for MyList*/}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* description*/}

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}                        {/*A snippet for showing the description of the movie */}
        </h1>
        </div>
        <div className="banner--fadeBottom"/>                     {/*We want bottom of description to be little fadded for seeing a continuity effect*/}
    </header>
  )
}

export default Banner