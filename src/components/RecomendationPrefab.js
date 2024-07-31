

import helper from '../assets/imgs/Movies/Missing2.png';

import React, { useContext } from 'react';
import { ElementContext } from '../Context/InfoContext';

import { Row, Col } from 'react-bootstrap';


export const RecomendationPrefab = ({url, title, overview, referenceId, num, identifier}) => {

    const { changeValue  } = useContext(ElementContext);
    const { changeType  } = useContext(ElementContext);

    let Prefab;
    if(url == null || url === undefined) {

        Prefab =  helper
    }else{
        Prefab = "https://image.tmdb.org/t/p/original/" + url
    }

    const handleClick = () => {

        console.log(referenceId);
        changeValue(referenceId);
        changeType(identifier);
  };


    return (

            
            <div style={{paddingTop: "10px"}}>
            <div onClick={handleClick} style={{backgroundColor: "rgb(43, 43, 43)", verticalAlign: "", width: "95%", paddingBottom: "10px", paddingTop: "10px", borderRadius: "10px"}}> 
                <Row >
                <Col style={{paddingLeft: "10px", paddingRight: "10px" , alignItems: "center", display: "flex"}}> 
                {num < 10 ? <h1 style={{ paddingLeft: "5px", paddingRight: "10px"}}>{num}</h1>: <h1>{num}</h1>}</Col> 
                <Col style={{ paddingRight: "10px", alignItems: "center",  display: "flex"}}> <img className="SmallMovie" src={Prefab} alt="Series" style={{width: "200px"}}></img > </Col>

                <Col> 
                    <Row>
                        <h1 style={{ fontSize: "1.5vw"}}> {title} </h1>
                    </Row>
                    <p style={{paddingTop: "5px", fontSize: ".8vw" , width: "95%", textAlign: "justify"}}> {overview} </p>
                </Col>

                </Row>
            </div>
            </div>

    )

}