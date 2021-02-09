import React, { Component } from 'react'
import { Button, NavDropdown, Navbar, Nav, Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import '../Utils/custom.css'

export default class Home extends Component {
    render() {
        return (
            <div className="body-baner" id="home">
                <Container fluid className="baner-section">



                    <Carousel>
                        <Carousel.Item>
                            <Row className="baner-row">
                                <Col xl={6} className="description-baner   ani-try">
                                    <h1 className="baner-tittle ani-try">Profitability <br></br> on the Rise</h1>
                                    <p className="baner-para">Trading platform that supports your <br></br> financial goals</p>
                                    <button className="baner-btan">start trading- <span className="btan-span">it's free</span></button>
                                </Col>
                                <Col xl={6} className="image-baner">
                                    <Image className="baner-image" src="/Asserts/trade-baner.png" />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="baner-row">
                                <Col xl={6} className="description-baner   ani-try ">
                                    <h1 className="baner-tittle  ani-try">Profitability <br></br>  on the Rise</h1>
                                    <p className="baner-para">Trading platform that supports your <br></br> financial goals</p>
                                    <button className="baner-btan">start trading- <span className="btan-span">it's free</span></button>
                                </Col>
                                <Col xl={6} className="image-baner">
                                    <Image className="baner-image" src="/Asserts/trade-baner.png" />
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row className="baner-row">
                                <Col xl={6} className="description-baner   ani-try ">
                                    <h1 className="baner-tittle  ani-try">Profitability <br></br>  on the Rise</h1>
                                    <p className="baner-para">Trading platform that supports your <br></br> financial goals</p>
                                    <button className="baner-btan">start trading- <span className="btan-span">it's free</span></button>
                                </Col>
                                <Col xl={6} className="image-baner">
                                    <Image className="baner-image" src="/Asserts/trade-baner.png" />
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        )
    }
}
