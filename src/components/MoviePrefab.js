import helper from '../assets/imgs/Movies/Missing1.png';





export const MoviePrefab = ({url , key, title}) => {

    let Prefab;
    
    if(url == null || url === undefined) {

        Prefab =  helper
    }else{
        Prefab = "https://image.tmdb.org/t/p/original/" + url
    }

    return (
        <div key = {key} >
            <img className="BigMovie" src={Prefab} alt="Movie"></img> 
            <h2> {title} </h2>
            </div>
    )

}