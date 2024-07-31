
import helper from '../assets/imgs/black.png';
import HDLogo from "../assets/imgs/HDLogo.png"
import close from "../assets/imgs/close.png"
import {FloatingOverlay} from '@floating-ui/react';
import { useState, useEffect } from "react";
import { Row, Col } from 'react-bootstrap';
import play from "../assets/imgs/play.svg"

import { SeasonMenu } from "./SeasonMenu";
import React, { useContext } from 'react';
import { ElementContext } from '../Context/InfoContext';



export const Info = ({ identifier, referenceid}) => {

    const [self, setSelf] = useState([]);

    const [link, setLink] = useState([]);

    const { changeValue } = useContext(ElementContext);

    const handleClick = () => {
        console.log(0);
        changeValue(0);
    };

    const onClickLink=  () => {
        if(link === 0) {
            window.open("https://www.youtube.com");
        } 
        window.open("https://www.youtube.com/watch?v=" + link);
    };

    let type= "tv";
    let Prefab;
    let seasonsNumber = 1;
    let genres = [];

    if(identifier === 0) {
        type = "tv"
    }

    if(identifier === 1) {
        type = "movie";
    }

    let url = `https://api.themoviedb.org/3/${type}/${referenceid}?api_key=${process.env.REACT_APP_API_KEY}`;

    let url2 = `https://api.themoviedb.org/3/${type}/${referenceid}/videos?api_key=${process.env.REACT_APP_API_KEY}`

    console.log(url)
    useEffect(() => {
    // POST request using fetch inside useEffect React hook
        console.log(referenceid);
    const fetchData = async () => {
        const result = await fetch(url)
        const json = await result.json();
        console.log(json);
        setSelf(json);
        
    }
    const fetchLink = async () => {
        const result = await fetch(url2)
        const json = await result.json();
        if(json.results !== undefined && json.results !== null && json.results.length !== 0){
            let flag = false;
            for(let item of json.results){
                if(item.key === "Trailer"){
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
    fetchLink();
    }, [url, referenceid, identifier, url2]);



    if(self.backdrop_path == null || self.backdrop_path === undefined) {

        Prefab =  helper
    }else{
        Prefab = "https://image.tmdb.org/t/p/original/" + self.backdrop_path
    }

    if(self === null || self === undefined) {
        return (
            null
        )
    }

    if(self !== undefined && self !== null && self.length !== 0){
        console.log(self);
        if(identifier === 0){
            seasonsNumber = self.seasons.length;
        }
        
        genres = self.genres
    }

    return (

            <FloatingOverlay><div className='infoContainer' style={{height: "auto", display: "inline-block", paddingTop: ".5%", zIndex: "99999"}}>
                <div style={{ backgroundImage: `url(${Prefab})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%" }}>
                    <Row style={{display:'flex', justifyContent: "flex-end", paddingTop: ".5%"}}>
                    <button  className='forX' onClick={handleClick}> <img src={close} ></img> </button>
                    </Row>
                    <div style={{paddingTop: "50px", paddingLeft: "55px", paddingBottom: "100px"}}></div>
                    <div style={{paddingTop: "50px", paddingLeft: "55px", }}>
                        {identifier === 0 ? <h1> {self.name} </h1>: <h1>{self.original_title} </h1>}
                        
                    </div>
                    <div style={{paddingTop: "10px", paddingLeft: "55px",paddingBottom: "50px"}}>
                    <button onClick={() => onClickLink()} style={{fontSize: "30px", backgroundColor: "black", color: "white", paddingLeft: "10px", paddingRight:" 10px", paddingTop: "10px", paddingBottom: "10px", borderColor: "white"}}><Row><img src={play} style={{height: "35px"}}></img>Play</Row></button>
                    </div>
                    

                </div>
                <Row style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", paddingLeft: "50px"}}>
                <Row style={{ paddingTop: "20px", display: "flex", flexWrap: "wrap"}}>
                    {identifier === 0 ? <Col><h3 className='netflixGreyT'> {self.first_air_date} </h3> </Col>: <Col><h3 className='netflixGreyT'> {self.release_date} </h3> </Col>}
                {identifier === 0 ? <Col><h2  className='netflixGreyT'>{seasonsNumber} seasons</h2></Col> : <Col><h2  className='netflixGreyT'> Movie</h2></Col>}

                <Col  ><img src={HDLogo} style={{width: "45px", paddingTop: "2px", }}></img></Col ></Row >


                <Col style={{display: "flex", flexWrap: "wrap", paddingRight: "10%", paddingTop: "23px"}}> <h3 className='netflixGrey' >Genres: </h3> 
                <Row style={{display: "flex"}}><Row> {genres.map(genre => (
                        <h3  style={{paddingLeft: "10px"}} > {genre.name + ", "}  </h3>
                        ))} </Row></Row></Col> 

                 </Row >

                 <Row style={{paddingLeft: "50px", paddingTop: "10px"}}>
                    <Col><p style ={{width: "90%", fontSize: "1.5vw", textAlign: "justify"}} > {self.overview} </p></Col>
                 </Row>

                <SeasonMenu referenceid={referenceid} identifier={identifier}></SeasonMenu>

                 



            </div></FloatingOverlay>

            )

  
    

}