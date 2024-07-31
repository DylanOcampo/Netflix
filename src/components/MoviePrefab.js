

import helper from '../assets/imgs/Movies/Missing2.png';

import React, { useContext } from 'react';
import { ElementContext } from '../Context/InfoContext';

export const MoviePrefab = ({url, title, referenceId}) => {

    const { changeValue } = useContext(ElementContext);
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
        changeType(1);
  };


    return (
            <div> <button style={{backgroundColor: "rgba(217, 217, 217, 0)" , borderColor: "rgba(217, 217, 217, 0)"}}><img className="BigMovie" src={Prefab} alt="Movies" onClick={handleClick}></img > </button> 
            <div style={{textAlign: "center"}}></div>
            <h3 style={{ bottom: "30px", position: "relative", left: "10%"}}> {title} </h3>
            </div>

    )

}