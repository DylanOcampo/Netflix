import Button from 'react-bootstrap/Button';
import play from "../assets/imgs/play.svg"
import { Row } from 'react-bootstrap';
import {Content} from "./Content.js"

import { useState, useEffect } from "react";

export const Banner = ({identifierB}) => {


    const [element, setElement] = useState([]);
    const [link, setLink] = useState()

    let Type;
    if(identifierB === 2) {
        Type = "tv";
    }else{
        Type = "movie";
    }
    const url = `https://api.themoviedb.org/3/${Type}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${identifierB}`;
    let url2 = "";


    useEffect(() => {
    // POST request using fetch inside useEffect React hook

    const fetchData = async () => {
        const result = await fetch(url)
        const json = await result.json();
        setElement(json.results[0]);
        fetchLink(json.results[0].id);
        console.log(json.results[0]);
    }
    const fetchLink = async (val) => {
        url2 = `https://api.themoviedb.org/3/${Type}/${val}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        const result = await fetch(url2)
        const json = await result.json();
        if(json.results !== undefined && json.results !== null && json.results.length !== 0){
            let flag = false;
            for(let item of json.results){
                if(item.type === "Trailer"){
                    setLink(item.key);
                    flag = true;
                    break;
                }
            }
            if(!flag){
                setLink(json.results[json.results.length - 1].key);
            }
        }else{
            setLink(0)
        }
    }
    fetchData();
    }, [url, identifierB, url2]);


    const onClickLink=  () => {
        if(link === 0) {
            window.open("https://www.youtube.com");
        } 
        window.open("https://www.youtube.com/watch?v=" + link);
    };

    return (

        <div>
            
            <div style={{ backgroundImage: `url(${ "https://image.tmdb.org/t/p/original/" + element.backdrop_path})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",}}>
            {Type === "tv" ? <h1 style={{paddingTop: "500px", paddingLeft: "50px", fontSize: "100px"}}>
                {element.name}
            </h1> : <h1 style={{paddingTop: "500px", paddingLeft: "50px", fontSize: "100px"}}>
                {element.original_title}
            </h1>}
            <p style={{ paddingLeft: "55px", fontSize: "20px", maxWidth: "1000px", lineHeight: "30px"}}>
                {element.overview} </p>
                <div style={{paddingTop: "50px", paddingLeft: "55px", paddingBottom: "200px"}}>
                    <Button onClick={() => onClickLink()} style={{fontSize: "30px", backgroundColor: "black", color: "white", paddingLeft: "10px", paddingRight:" 10px", paddingTop: "10px", paddingBottom: "10px", borderColor: "white"}}><Row><img src={play} style={{height: "35px"}}></img>Play</Row></Button>
                </div>
            </div>
            <Content identifier={identifierB}></Content>
        </div>

    


    ) 
    
}