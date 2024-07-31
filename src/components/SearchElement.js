import { useState, useEffect } from "react";
import { SeriesPrefab } from "./SeriesPrefab.js";


export const SearchElement = ({query}) => {

    const [movies, setMovies] = useState([]);


    const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`;
    useEffect(() => {
    // POST request using fetch inside useEffect React hook

    const fetchData = async () => {
        const result = await fetch(url)
        const json = await result.json();
        console.log(json);
        setMovies(json.results);
    }
    fetchData();
    }, [url]);

    let SearchResults = [];

    if(movies !== undefined && movies !== null && movies.length !== 0){
      for (let index = 0; index < movies.length; index++) {
        let helperUrl;
        let helperName;
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

        SearchResults.push(<div style ={{padding: "10px"}}> <SeriesPrefab  url = { helperUrl} referenceId={movies[index].id} title={helperName}> </SeriesPrefab></div>)
      }
    }

    return (

        <div style={{display: "flex", flexWrap: "wrap", paddingTop: "100px", justifyContent: "space-between"}}> {SearchResults} </div>


    ) 
}