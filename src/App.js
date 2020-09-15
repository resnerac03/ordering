import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Table, Container, Row, Col } from 'react-bootstrap';
import Home from './pages/Home';
import Order from './pages/Order';

const App = () => {
    return (
       
        <Router>
            <Container>
                <Route exact path="/" component={Home} />
                <Route path="/order/:value" component={Order} />
            </Container>
        </Router>
       
    )
}

export default App;