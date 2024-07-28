
import helper from '../assets/imgs/Movies/Missing2.png';

export const Info = ({ url}) => {

    let info;
    
    let Prefab;

    if(url == null || url === undefined) {

        Prefab =  helper
    }else{
        Prefab = "https://image.tmdb.org/t/p/original/" + url
    }

    if(info === undefined){
        return( null)
    }else{
        return (

            <div className='infoContainer'>
                <img src={Prefab}></img>
            </div>

            )
    }

  
    

}