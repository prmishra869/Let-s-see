const API_KEY="7064e6089f042c0634a0bfc77f32a6c1";   //This is the API Key we have generated from TMDB earlier

                                                    //we will make request to various end points of the link of the movies section like trending ,action etc 
                                                    //for further detail visit
                                                    //https://developers.themoviedb.org/3/trending/get-trending
const requests={
                                                    //Bunch of Api requests
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;                            //This line will export all the requests made