import { Col, Row } from "react-bootstrap"
import { DiscoverMovie } from "./DiscoverMovie.js";
import { DiscoverSeries } from "./DiscoverSeries.js";


export const Content = ({identifier}) => {

    let element;
    if(identifier === 1) {
        element = (
        <div>
            <h1 style={{paddingTop: "10px",  paddingLeft: "10px"}}>New Movies</h1>
            
                <DiscoverMovie num ={1}></DiscoverMovie>
            
            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Must Watch</h1>
            
                <DiscoverSeries num ={1}></DiscoverSeries>
            
            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Recommended</h1>
            
                <DiscoverSeries num ={2}></DiscoverSeries>
            
        </div>
    );
    }

    if(identifier === 2) {
        element = (
        <div>
            <h1 style={{paddingTop: "10px",  paddingLeft: "10px"}}>Best Series</h1>
                <DiscoverSeries num ={1}></DiscoverSeries>

            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Must Watch</h1>
                <DiscoverSeries num ={2}></DiscoverSeries>

            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Recommended</h1>
                <DiscoverSeries num ={3}></DiscoverSeries>

        </div>
    );
    }

    if(identifier === 3) {
        element = (
        <div>
            <h1 style={{paddingTop: "10px",  paddingLeft: "10px"}}>Best Movies</h1>
                <DiscoverMovie num ={1}></DiscoverMovie>

            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Must Watch</h1>
                <DiscoverMovie num ={2}></DiscoverMovie>
            <h1 style={{paddingTop: "10px", paddingLeft: "10px"}}>Recommended</h1>
                <DiscoverMovie num ={3}></DiscoverMovie>
        </div>
    );
    }



    return (

        <>{element}</>

        


    ) 
    
}