import Profile1 from '../assets/imgs/Profiles/NetflixProfile (1).jpg';
import Profile2 from '../assets/imgs/Profiles/NetflixProfile (2).jpg';
import Profile3 from '../assets/imgs/Profiles/NetflixProfile (3).jpg';
import Profile4 from '../assets/imgs/Profiles/NetflixProfile (4).jpg';

import { Button } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";


export const User = ({num}) => {

    let img;
    if(num === 1) {
        img = Profile1;
    }
    if(num === 2) {
        img = Profile2;
    }
    if(num === 3) {
        img = Profile3;
    }
    if(num === 4) {
        img = Profile4;
    }

    const navigate = useNavigate()
    const gotToNewPage=()=>{
        navigate("/home");
    }
    return( 
        <div>
            <Button onClick={() => gotToNewPage()}><img src={img} alt="User" style={{height: "200px", width: "auto"}}/></Button>
                <h4 style={{textAlign: "center", paddingTop: "10px"}}>User {num}</h4></div>
        
    )

}