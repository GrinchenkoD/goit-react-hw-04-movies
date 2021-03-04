import axios from "axios"

const KEY = "c1bc6964ae67d43eb6945614299c385c";

const getTrending = async () => {
    // `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
    
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`);
    
    return response.data.results

        
    } catch (error) {
        console.log(error)
    }
}




export {getTrending,}