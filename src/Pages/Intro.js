import { Col, Row } from "react-bootstrap"
import logo from '../assets/imgs/Logonetflix.png';
import Button from 'react-bootstrap/Button';
import netflixBanner from '../assets/imgs/NetflixBanner.jpg';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import { useNavigate } from "react-router-dom";

export const Intro = () => {

    const navigate = useNavigate()

    const gotToNewPage=()=>{
        navigate("/profiles");
    }


    return (
        <div>
            <div style={{backgroundImage: `url(${netflixBanner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                



            
            <Row style={{paddingTop: "20px", justifyContent: "space-between"}}>
                <Col style={{paddingLeft: "50px"}}><img src={logo} alt="Logo" style={{maxWidth: "200px"}}/></Col>
                <Col style={{paddingRight: "50px"}}><Button style={{fontSize: "30px", backgroundColor: "red", color: "white", paddingLeft: "10px", paddingRight:" 10px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "5px"}}><h4 style={{fontSize: "20px"}} onClick={() => gotToNewPage()}>Sign In</h4></Button></Col>
            </Row>
                <div className="centered" style={{flexDirection: "column" }}>
            
                    <h1 style={{fontSize: "50px"}}> Unlimited movies, TV shows, and more</h1>
                    <h2 style={{paddingTop: "10px"}}> Watch anywhere. Cancel anytime</h2>
                    <h2 style={{paddingTop: "30px"}}>Ready to watch? Enter your email to create or restart your membership</h2>
                    <Row>
                        <Col><InputGroup  >
                            <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
                            <Form.Control className="Input"
                            placeholder="    Email"
                            />
                        </InputGroup></Col>
                        <Col style={{paddingLeft: "10px"}}><Button style={{fontSize: "30px", backgroundColor: "red", color: "white", paddingLeft: "10px", paddingRight:" 10px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "5px"}} onClick={() => gotToNewPage()}><h4 style={{fontSize: "20px"}}>Get Started</h4></Button></Col>
                    </Row>
                </div>
                
            </div>

        










        </div>
    )
}