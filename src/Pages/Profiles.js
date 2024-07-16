
import { Col, Container, Row, Button } from 'react-bootstrap';
import Profile1 from '../assets/imgs/Profiles/NetflixProfile (1).jpg';
import Profile2 from '../assets/imgs/Profiles/NetflixProfile (2).jpg';
import Profile3 from '../assets/imgs/Profiles/NetflixProfile (3).jpg';
import Profile4 from '../assets/imgs/Profiles/NetflixProfile (4).jpg';

import { useNavigate } from "react-router-dom";

export const Profiles = () => {

    const navigate = useNavigate()

    const gotToNewPage=()=>{
        navigate("/home");
    }
    const returnPage=()=>{
        navigate("/intro");
    }

    return (

        <div class="centered">
            <Container>
                <Row style={{justifyContent: "center", paddingBottom: "30px"}}><h1 style={{fontSize: "50px"}}>¿Quién esta viendo ahora?</h1></Row>
            <Row>
            <Col style={{ paddingRight: "40px"}} >
                <Button onClick={() => gotToNewPage()}><img src={Profile1} alt="Perfil" style={{height: "200px", width: "auto"}}/></Button>
                <h4 style={{textAlign: "center", paddingTop: "10px"}}>Usuario 1</h4>
            </Col>
            <Col style={{ paddingRight: "40px"}}>
                <Button onClick={() => gotToNewPage()}><img src={Profile2} alt="Perfil" style={{height: "200px", width: "auto"}}/></Button>
                <h4 style={{textAlign: "center", paddingTop: "10px"}}>Usuario 2</h4>
            </Col>
            <Col style={{ paddingRight: "40px"}}>
                <Button onClick={() => gotToNewPage()}><img src={Profile3} alt="Perfil" style={{height: "200px", width: "auto"}}/></Button>
                <h4 style={{textAlign: "center", paddingTop: "10px"}}>Usuario 3</h4>
            </Col>
            <Col style={{ paddingRight: "40px"}}>
                <Button onClick={() => gotToNewPage()}><img src={Profile4} alt="Perfil" style={{height: "200px", width: "auto"}}/></Button>
                <h4 style={{textAlign: "center", paddingTop: "10px"}}>Usuario 4</h4>
            </Col>
            </Row>
            <Row style={{justifyContent: "center", paddingTop: "100px"}}>
                <Button style={{fontSize: "30px", backgroundColor: "black", color: "white", paddingLeft: "10px", paddingRight:" 10px", paddingTop: "10px", paddingBottom: "10px", borderColor: "white"}}>Administrar perfiles</Button>
            </Row>
            <Row style={{justifyContent: "center", paddingTop: "10px"}}>
                <Button onClick={() => returnPage()} style={{fontSize: "30px", backgroundColor: "black", color: "grey", paddingLeft: "10px", paddingRight:" 10px", paddingTop: "10px", paddingBottom: "10px", borderColor: "grey"}}>Salir</Button>
            </Row>
            </Container>
        </div>

    


    ) 
    
}