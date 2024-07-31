
import { RecomendationPrefab } from './RecomendationPrefab';
import { useState, useEffect } from "react";



export const SeasonMenu = ({ referenceid, identifier}) => {

    const [self, setSelf] = useState([]);

    let type= "tv";
    let recommendations = [];

    if(identifier === 0) {
        type= "tv";
    }

    if(identifier === 1) {
        type = "movie";
    }

    let url = `https://api.themoviedb.org/3/${type}/${referenceid}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`;

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const fetchData = async () => {
        const result = await fetch(url)
        const json = await result.json();
        console.log(json);
        setSelf(json);
    }
    fetchData();
    }, [url, referenceid]);

    if(self !== undefined && self !== null && self.length !== 0){
        console.log(self.results);
        for (let index = 0; index < self.results.length; index++) {
            if(identifier === 0){
            recommendations.push(<RecomendationPrefab url={self.results[index].backdrop_path} title={self.results[index].name} overview={self.results[index].overview} num={index + 1} referenceId={self.results[index].id} identifier={identifier}></RecomendationPrefab>)
            }else{
            recommendations.push(<RecomendationPrefab url={self.results[index].backdrop_path} title={self.results[index].original_title} overview={self.results[index].overview} num={index + 1} referenceId={self.results[index].id} identifier={identifier}></RecomendationPrefab>)
  
            }
        }
    }

    return (
        <div style={{paddingLeft: "50px", paddingTop: "20px", }}>

        <h2> Recommendations</h2>

        <>{recommendations}</>
        </div>

    )

}