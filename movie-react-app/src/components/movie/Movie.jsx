import { useEffect, useState } from "react"
import MovieCard from "../movieCard/MovieCard"
import SearchBar from "../searchBar/SearchBar"


const Movie=()=>{

    const [movieList, setMovieList]=useState([])
    const [movieName, setMovieName]=useState("")
    const [loading, setLoading] = useState(true); // Add loading state

    const getData=(data)=>{
        setMovieName(data)   
    }

    const API_KEY=process.env.REACT_APP_API_KEY
    const api=process.env.REACT_APP_API_URL

    const search_api=`${api}search/movie?query=${movieName}&api_key=${API_KEY}`
    const discover_api=`${api}discover/movie?api_key=${API_KEY}`
    
    const getMovie=()=>{
        setLoading(true); // Set loading state to true
        if(movieName){
            fetch(search_api)
            .then(response =>response.json())
            .then(json => {
                console.log(json)
                setMovieList(json.results);
                setLoading(false); // Set loading state to false after fetching data
            }) 
        }else{
            fetch(discover_api)
            .then(response =>response.json())
            .then(json => {
                console.log(json)
                setMovieList(json.results);
                setLoading(false); // Set loading state to false after fetching data
            })
        }
    }

    useEffect(()=>{
        getMovie()
    },[movieName])

    return(
        <>
            <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-zinc-800 py-7 mb-11">
                <SearchBar onSubmit={getData} />
            </div>
        
            <div className=" flex justify-center ">
                {loading ? ( // Check if loading state is true
                    <p>Loading...</p>
                ) : (
                    <div className=" grid grid-cols-1 gap-1 md:gap-4 px-4 py-4 lg:py-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                        {movieList.length > 0 ? ( // Check if movieList is not empty
                            movieList.map((movie)=>(
                                <MovieCard
                                    key={movie.id} // Add key prop for each MovieCard
                                    id={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                />
                            ))
                        ) : (
                            <p>No movies found</p>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default Movie