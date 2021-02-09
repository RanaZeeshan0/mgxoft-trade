import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import { Button, NavDropdown, Navbar, Nav, Container, Col, Image, Dropdown, ButtonGroup, DropdownButton, Form, FormControl, Table } from 'react-bootstrap';
import SplitButton from 'react-bootstrap/SplitButton';
import '../Utils/custom.css'

export default class Home extends Component {
    render() {
        return (
            <div className="chart-box">
                <Container id="chart">
                    <h1 className="chart-tittle">
                        Cryptocurrency Prices Live Charts
                    </h1>
                    <Row className="chart-buttons-box">
                        <Col className="chart-valu">Coins:</Col>
                        <Col className="chart-valu">Exchanges:</Col>
                        <Col className="chart-valu">Market Cap: </Col>
                        <Col className="chart-valu">24h Vol:</Col>
                        <Col className="chart-valu">Dominance:</Col>
                    </Row>

                    <Row className="dorp-search-box">
                        <Col  xs={6} className="drop-box">
                            <DropdownButton id="dropdown-basic-button" variant="light" title="Cryptocurrency">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </Col>

                        <Col  xs={6} className="search-box">
                            <Form inline className="search-form">
                                <FormControl className="search-bar" type="text" placeholder="Search" />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </Col>
                    </Row>



                    <Row className="table-box">
                        <Table className="table-hieght" responsive striped bordered hover >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Change</th>
                                    <th>Market Cap</th>
                                    <th>Chart</th>
                                    <th>Volume</th>
                                    

                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className="name-box">#MetaHash</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>

                                    
                                    
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="name-box">$YEET</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="name-box">01coin</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td className="name-box">01coin</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td className="name-box">01coin</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    
                                </tr>

                                <tr>
                                    <td>6</td>
                                    <td className="name-box">01coin</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    
                                </tr>

                                <tr>
                                    <td>7</td>
                                    <td className="name-box">01coin</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                   
                                </tr>

                                <tr>
                                    <td>8</td>
                                    <td className="name-box">01coin</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    
                                </tr>

                                <tr>
                                    <td>9</td>
                                    <td className="name-box">01coin</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    
                                </tr>

                                <tr>
                                    <td>10</td>
                                    <td className="name-box">01coin</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td className="name-box">01coin</td>
                                    <td>$29.83B</td>
                                    <td className="name-box">+$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    <td>$29.83B</td>
                                    
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        )
    }
}