
import helper1 from '../assets/imgs/Movies/Missing1.png';
import helper2 from '../assets/imgs/Movies/Missing2.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export const CardPrefab = ({image, title, summary, identifier, yt}) => {

    let Prefab;
    const [ytvideo, setVideo] = useState([]);
    
    if(image == null || image === undefined) {
        if(identifier === 1){
            Prefab =  helper1
        }
        if(identifier === 2){
            Prefab =  helper2
        }
    }else{
        Prefab = "https://image.tmdb.org/t/p/original/" + image
    }

    const apiKey = "b6f310b3d311139fc11dd6747fe3d946";
    const url = `https://api.themoviedb.org/3/movie/${yt}/videos?api_key=${apiKey}&language=en-US`;

    useEffect(() => {
    // POST request using fetch inside useEffect React hook
    try{
        const fetchData = async () => {
        const result = await fetch(url)
        const json = await result.json();
        console.log(json.results) ;
        
        if(json.results != null && json.results !== undefined && json.results.length !== 0){
            setVideo("https://www.youtube.com/watch?v=" + json.results[json.results.length-1].key) ;
        }
    }
    fetchData();
        if(ytvideo === null){
            setVideo(`https://www.youtube.com/results?search_query=${title}+trailer`) ;
        }
    
    }
    catch(e){
        setVideo(`https://www.youtube.com/results?search_query=${title}+trailer`) ;
    }
    }, []);

    console.log(ytvideo) ;


    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {Prefab} />
        <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text>
                {summary}
            </Card.Text>
            <a href={ytvideo}> Watch</a>
            <Button variant="primary">info</Button>
        </Card.Body>
        </Card>
    )

}