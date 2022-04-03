import React, { useState,useEffect} from 'react'
//each Row will have bunch of title like trending ,action etc and have a container containing posters of movies
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url="https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {                                 //here we are passing title,fetchUrl as the parameter in Row function
                                                                             //Now we have to use state to keep track of the movies state is like a short term memory when we refresh it disappears
                                                                            //State is a way to write variable in REACT
                                                                            //movies is the name of the variable
  const [movies,setMovies] = useState([]);                                  //Inside Bracket of useState we will give some initial value here we are giving an empty Array since we are 
                                                                            // using useState so we have to import it from the React,This line gives us empty movies Array So we have to fill it with some information
  const [trailerUrl, setTrailerUrl]= useState("");                          //peace of state for trailer Url so that when we click on Thumbnail we want to capture the trailerUrl

  //A snipet of code which runs based on a specific Condition/Variable
  useEffect(()=>{
                                                                            //if [] blank bracket, then run once when the row loads, and don't run again
                                                                            //but if there is a variable there ,like fetchUrl(as it is there below) which gets changed then useEffect function will run every single time 
    async function fetchData(){
      const request = await axios.get(fetchUrl);                            //Now we have to send request and we have to wait untill data gets fetched See the App.js that how the below link is fetched
       //"https://api.themoviedb.org/3/trending/all/week?api_key=${7064e6089f042c0634a0bfc77f32a6c1}&language=en-US"
                                                                            // console.log(request.data.results);//It will show what data structure we get back in console section when we inspect on the webpage
      setMovies(request.data.results);                                      //We are setting Movies with whatever results we get back
      return request;

    }
    fetchData();
  },[fetchUrl]);                                                            //Whatever variable we use Inside useEffect we have to put it inside the bracket because there is an Dependency involved


/*This opts is the exact code snippet from react youtube npm https://www.npmjs.com/package/react-youtube*/
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,                                                          //When loads in autoplay will come into execution
    },
  };


  //This comes into action when user clicks on the picture
  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');                                                   //Closing the trailer if double clicked by setting trailerUrl empty ie if video is already playing then by again pressing the button we can hide the video
    } else{
      movieTrailer(movie?.name || "")                                      //If we pass the name then it will find the trailer of that movie also we have to give protection because sometimes movie name is not defined
                                                                           //the below 3 lines are used to get vYYlOmqxk_s from https://www.youtube.com/watch?v=vYYlOmqxk_s&ab_channel=Mustangelultimoreino i.e whatever present after v=
      .then((url) => {
          const urlParams =new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
    }
  };

  console.log(movies);

  return (
    <div className="row">
         {/* title */}
        <h2>{title}</h2>
        <div className="row__posters">
          {/* several row__poster */}
          {movies.map(movie=>(
            //https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg
            <img 
            key={movies.id}                                                  /*we want to optimize react so that while rendering loading of icons become fast we can do it by key and passing some unique thing inside the curly braces */
            onClick={() => handleClick(movie)}                               //Creating a function here handleClick defined above
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}   /*Everything gets to row__poster class but if its a large row then we will go to other class named as row__posterLarge */
                                                                            /*if isLargeRow then pass the poster as in case of Let's see Originals otherwise pass the backdrop path i.e thumbnails*/ 
             src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/> //Posters having link of image source if we didn't get image then alternatively pass the movie.name
          ))}
          {/*container ->posters */}
        </div>
        
         {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}    {/*it takes some video id and some options which are defined above as opts also when we have trailerUrl then only we show the trailer */}
    </div>
  )
}

export default Row