import axios from "axios"

const KEY = "c1bc6964ae67d43eb6945614299c385c";

const getTrending = async () => {
    // `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`);
        return response.data.results;
    } catch (error) {
        console.log(error)
    }
}

const searchByName = async (query) => {
   // https://api.themoviedb.org/3/search/movie?api_key=c1bc6964ae67d43eb6945614299c385c&language=en-US&query=query&page=1&include_adult=false
    
    try {
        const responce = await axios.get (`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        
        return responce.data.results;
    } catch (error) {
        console.log(error)
    }
}

const searchByID = async (id) => {
    // https://api.themoviedb.org/3/movie/1111111?api_key=c1bc6964ae67d43eb6945614299c385c&language=en-US
    try {
        const responce = await axios.get(` https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
        return responce.data;
    } catch (error) {
        console.log(error)
    }
}

const searchCast = async (id) => {
    
    try {
        const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`)
        return(responce.data.cast)
    } catch (error) {
        console.log(error)
    }
}

const getReviews = async (id) => {
  try {
      const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`) 
 return(responce.data.results)
 
  } catch (error) {
             console.log(error) 
  }
}





export {getTrending, searchByName, searchByID, searchCast, getReviews}