import { Container, Row, Col} from "react-bootstrap";

const Product = () =>{
    return(
        <Container className="" fluid>
            <Row>
                <Col md={4}>this is the first block</Col>
                <Col md={8}>this is the second block</Col>
            </Row>
        </Container>
    );
}

export default Product;