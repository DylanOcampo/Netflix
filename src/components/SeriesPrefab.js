

import helper from '../assets/imgs/Movies/Missing2.png';

import React, { useContext } from 'react';
import { ElementContext } from '../Context/InfoContext';

export const SeriesPrefab = ({url, title, referenceId}) => {

    

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
        changeType(0);
  };

    if(title.length > 29) {
        title = title.substr(0,29);
        title = title + "...";
    }


    return (
            <div> <button className='clearButton'><img className="SmallMovie" src={Prefab} alt="Series" onClick={handleClick}></img > </button> 
            <h3 style={{ bottom: "40px", position: "relative", left: "5%", display: "flex", flexWrap: "wrap", maxWidth: "350px", lineHeight: "20px"}}> {title} </h3>
            </div>

    )

}