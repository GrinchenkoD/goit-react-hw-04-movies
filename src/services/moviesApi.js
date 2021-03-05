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
        
    }
}





export {getTrending, searchByName}