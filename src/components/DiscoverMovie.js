import { useState, useEffect } from "react";
import { MoviePrefab } from "./MoviePrefab.js";
import Slider from "react-slick";



export const DiscoverMovie = ({num}) => {

    const [movies, setMovies] = useState([]);

    const apiKey = "b6f310b3d311139fc11dd6747fe3d946";

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${num}&sort_by=popularity.desc`;
    useEffect(() => {
    // POST request using fetch inside useEffect React hook

    const fetchData = async () => {
        const result = await fetch(url)
        const json = await result.json();

        setMovies(json.results);
    }
    fetchData();
    }, []);

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  };




    return (

        <div className="slider-container">
            <Slider {...settings}>
                {movies.map(movie => (
          <MoviePrefab  url = {movie.poster_path} referenceId={movie.id} title={movie.name}> </MoviePrefab>
        ))}
            </Slider> 
            
            
            </div>


    ) 
}