
import React, { useState } from 'react';
import helper from '../assets/imgs/Movies/Missing2.png';

export const SeriesPrefab = ({url, title, referenceId}) => {



    let Prefab;
    if(url == null || url === undefined) {

        Prefab =  helper
    }else{
        Prefab = "https://image.tmdb.org/t/p/original/" + url
    }

    const onClickLink=()=>{
        console.log(referenceId);
        
        
    }

    return (
            <div > <button><img className="SmallMovie" src={Prefab} alt="Series" onClick={() => onClickLink()}></img > </button> 
            <div style={{textAlign: "center"}}></div>
            <h3 style={{ bottom: "30px", position: "relative", left: "10%", WebkitTextStrokeWidth: ".5px", WebkitTextStrokeColor: "grey"}}> {title} </h3>
            </div>

            



    )

}