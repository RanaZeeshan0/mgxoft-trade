import { Row } from 'react-bootstrap';
import { Button, NavDropdown, Navbar, Nav , Container  ,Col ,Image} from 'react-bootstrap';
import './App.css';
import Home from './Com[ponents/Home'
import Footer from './Utils/Footer';
import NavBar from './Utils/NavBar';
import Chart from './Com[ponents/chart';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <Container fluid id="plans">
        <h1 className="packig-card-tittle">packages plan</h1>
      <Row>
        <Col xl={3}>
        <div className="container-custom">
        <div className="card">
            <div className="info">
                <h1 className="title">Economy</h1>
                <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                <div className="sizes">
                    <h1 className="price-pakig">$40</h1>
                    
                </div>
                <div className="purchase">
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>
        </Col>

        <Col xl={3}>
        <div className="container-custom">
        <div className="card">
            <div className="info">
                <h1 className="title">Deluxe</h1>
                <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                <div className="sizes">
                    <h1 className="price-pakig">$60</h1>
                    
                </div>
                <div className="purchase">
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>
        </Col>

        <Col xl={3}>
        <div className="container-custom">
        <div className="card">
            <div className="info">
                <h1 className="title">Ultimate</h1>
                <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                <div className="sizes">
                    <h1 className="price-pakig">$80</h1>
                    
                </div>
                <div className="purchase">
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>
        </Col>

        <Col xl={3}>
        <div className="container-custom">
        <div className="card">
            <div className="info">
                <h1 className="title">Ultimate Pro</h1>
                <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                <div className="sizes">
                    <h1 className="price-pakig">$100</h1>
                    
                </div>
                <div className="purchase">
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>
        </Col>
      </Row>
    </Container>
    <Chart/>
    <Footer/>
    

    </div>
  );
}

export default App;
