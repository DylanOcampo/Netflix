import { useState, useEffect } from "react";
import { SearchPrefab } from "./SearchPrefab";


export const SearchElement = ({query}) => {

    const [movies, setMovies] = useState([]);


    const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`;
    useEffect(() => {
    // POST request using fetch inside useEffect React hook

    const fetchData = async () => {
        const result = await fetch(url)
        const json = await result.json();
        setMovies(json.results);
    }
    fetchData();
    }, [url]);

    let SearchResults = [];

    if(movies !== undefined && movies !== null && movies.length !== 0){
      for (let index = 0; index < movies.length; index++) {
        let helperUrl;
        let helperName;
        let helperType;
        if(movies[index].backdrop_path === null){
          helperUrl = movies[index].poster_path;
        }else{
          helperUrl = movies[index].backdrop_path;
        }

        if(movies[index].name === undefined){
          helperName = movies[index].original_title;
        }else{
          helperName = movies[index].name;
        }
        if(movies[index].media_type === "tv"){
          helperType = 0;
        }else{
          helperType = 1; 
        }

        SearchResults.push(<div style ={{padding: "10px"}}> <SearchPrefab  url = { helperUrl} referenceId={movies[index].id} title={helperName} identifier={helperType}> </SearchPrefab></div>)
      }
    }

    return (

        <div style={{display: "flex", flexWrap: "wrap", paddingTop: "100px", justifyContent: "space-between"}}> {SearchResults} </div>


    ) 
}