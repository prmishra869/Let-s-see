import axios from "axios";                             //we installed this module or package earlier

/** base url to make requests to the movie database */
const instance=axios.create({                         //we will create an instance where axios give a method called create to pass a base url
    baseURL: "https://api.themoviedb.org/3",
});

//instance.get('/foo-bar');                          //if we want to get this instance then actual url we are going to get is https://api.themoviedb.org/3/foo-bar
export default instance;                             //Here we are expoting the instance to work upon the base url