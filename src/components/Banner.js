import Button from 'react-bootstrap/Button';
import promoBanner from '../assets/imgs/Series-Promo.jpg';
import seriesBanner from "../assets/imgs/SeriesBanner.webp";
import movieBanner from '../assets/imgs/movieBanner.jpg';
import play from "../assets/imgs/play.svg"
import { Row } from 'react-bootstrap';
import {Content} from "./Content.js"

export const Banner = ({identifierB}) => {

    const images = [promoBanner, seriesBanner, movieBanner];
    const Descriptions = ["Bridgerton follows Daphne Bridgerton (Phoebe Dynevor), the eldest daughter of the powerful Bridgerton family as she makes her debut onto Regency London’s competitive marriage market", "The series focuses on several noble houses of Westeros and a complicated, multiparty war for the Iron Throne that features shifting conflicts, alliances, and betrayals", "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies."];
    const Titles = ["Bridgerton", "Game of Thrones", "Captain America Civil War"]
    const Links = ["https://www.youtube.com/watch?v=gpv7ayf_tyE", "https://www.youtube.com/watch?v=KPLWWIOCOOQ", "https://www.youtube.com/watch?v=43NWzay3W4s"]

    const onClickLink=()=>{
        window.open(Links[identifierB -1], '_blank');;
    }




    return (

        <div>
            
            <div style={{ backgroundImage: `url(${images[identifierB -1]})`, backgroundRepeat: "no-repeat", backgroundSize: "cover",}}>
            <h1 style={{paddingTop: "500px", paddingLeft: "50px", fontSize: "100px"}}>
                {Titles[identifierB-1]}
            </h1>
            <p style={{ paddingLeft: "55px", fontSize: "20px", maxWidth: "1000px", lineHeight: "30px"}}>
                {Descriptions[identifierB -1]} </p>
                <div style={{paddingTop: "50px", paddingLeft: "55px", paddingBottom: "200px"}}>
                    <Button onClick={() => onClickLink()} style={{fontSize: "30px", backgroundColor: "black", color: "white", paddingLeft: "10px", paddingRight:" 10px", paddingTop: "10px", paddingBottom: "10px", borderColor: "white"}}><Row><img src={play} style={{height: "35px"}}></img>Play</Row></Button>
                </div>
            </div>
            <Content identifier={identifierB}></Content>
        </div>

    


    ) 
    
}