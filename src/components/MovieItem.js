import { Col, Row } from "react-bootstrap";



export const MovieItem = ({Type}) => {

    function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
    }

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const images = importAll(require.context('../assets/imgs/Movies/', false, /\.(png|jpe?g|svg)$/));

    let MovieCatalog = [];
    let NumberChecker = [];

    if(Type === 0){
        for (let index = 0; index < 12; index++) {
            while(true){
                let num = randomNumberInRange(1, 16);
                if(!NumberChecker.includes(num)){
                    MovieCatalog.push(<Col style={{paddingLeft: "10px" }}><img className="BigMovie" src={images["MovieBig(" + num +").jpg"]} alt="Movie"></img> </Col>);
                    NumberChecker.push(num);
                    break;
                }
            }
        }
    }
    if(Type === 1){
        for (let index = 0; index < 8; index++) {
            while(true){
                let num = randomNumberInRange(1, 11);
                if(!NumberChecker.includes(num)){
                    MovieCatalog.push(<Col style={{paddingLeft: "10px" }}><img className="SmallMovie" src={images["MovieSmall(" + num +").jpg"]} alt="Movie"></img> </Col>);
                    NumberChecker.push(num);
                    break;
                }
            }
            
        }
    }
    


    return (

        <div style={{paddingTop: "10px" }}>
            <Row>
            <>{MovieCatalog}</>
            </Row>
        </div>

    


    ) 
    
}