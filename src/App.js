import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Navbar from './components/navbar';
import Hero from './components/hero';
import './App.css';


class App extends Component {
  render() {
    return (
        <Container fluid={true}>
          <Navbar />
          <Hero />
        </Container>
    );
  }
}

export default App;
