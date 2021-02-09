import React, { useState }  from 'react'
import { Button, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './custom.css'

import login from '../Com[ponents/login'
import signup from '../Com[ponents/signup'

import MyVerticallyCenteredModal from '../Com[ponents/login'
import MyVerticallyCenteredModal2 from '../Com[ponents/signup'

export default function NavBar() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    return (
        <Router>
            <Navbar className="nav-box" collapseOnSelect expand="lg"  variant="dark">
                <Navbar.Brand className="brand-logo" href="#home">NGXOFT TRADE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        <Nav.Link className="nav-items" href="#footer">About Us</Nav.Link>
                        <Nav.Link className="nav-items" href="#plans">FAQS</Nav.Link>
                        <Nav.Link className="nav-items" href="#chart">Asets</Nav.Link>
                        <Nav.Link className="nav-items" href="#home">insghite</Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                        <Link to={"/sign-in" }>
                            <Button className="login-btn"  onClick={() => setModalShow(true)}>Login</Button>
        
                            < MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Link>
        
                        <Link to={"/sign-up"}>
                            <Button className="regester-btn" variant="primary" onClick={() => setModalShow2(true)}>Regestration</Button> 
                                < MyVerticallyCenteredModal2
                                    show={modalShow2}
                                    onHide={() => setModalShow2(false)}
                                />
                        </Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="auth-wrapper">
                <div className="auth-inner">
                <Switch>

                    <Route path="/sign-in" component={login} />
                    <Route path="/sign-up" component={signup} />
                </Switch>
                </div>
            </div>
        </Router>
    )
}
