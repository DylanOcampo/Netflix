import { useState, useEffect } from "react";
import { SeriesPrefab } from "./SeriesPrefab.js";
import Slider from "react-slick";

export const DiscoverSeries = ({num}) => {

    const [series, setSeries] = useState([]);

    const apiKey = "b6f310b3d311139fc11dd6747fe3d946";
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${num}&sort_by=popularity.desc`;
    useEffect(() => {
    // POST request using fetch inside useEffect React hook

    const fetchData = async () => {
        const result = await fetch(url)
        const json = await result.json();
        setSeries(json.results);
    }
    fetchData();
    }, []);



var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      
    ]
  };





return (

        <div className="slider-container">
            <Slider {...settings}>
                {series.map(movie => (
          <SeriesPrefab url = {movie.backdrop_path} referenceId={movie.id} title={movie.name}> </SeriesPrefab>
        ))}
            </Slider> </div>


    ) 
}