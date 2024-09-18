import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Profile from './profile.png';
//
function Welcome(props) {
    return <h1>Hello {props.surname}!</h1>
}

function NavBar() {
    return (    
    
    <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
        <div class="container-fluid">
            <h2><a class="navbar-brand" href="#">Memories Project</a></h2>
             <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )
}

function Banner() {
    return (
        <header className="App-header">
          <div class="col-lg-6 col-md-8 mx-auto" valign="center">
            <h1 class="fw-light" id="portfolio">Memory Project Samples</h1>
            <h6 class="lead"><p>Memories gathered from the stories of the mind.</p></h6> 
         </div>
        </header>
    )
}

function Cards(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="outline-primary">{props.button}</Button>
            </Card.Footer>
        </Card>
      );
}

function Single() {
    return (
        <Card style={{ width: '18rem'}}>
          <Card.Img variant="top" src="https://picsum.photos/id/237/200/300" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}

function Section() {
    
    return (
        <div className="App-section">
         <div class="col-lg-6 col-md-8 mx-auto" valign="center">
            <h1 class="fw-light" id="portfolio">Section Samples</h1>
            <h6 class="lead"><p>Memories gathered from the stories of the mind.</p></h6> 
            <CardGroup style={{ width: '50rem'}}>
                <Cards img="https://picsum.photos/id/237/200/300" title="City of Fanatical Hope" desc="A story born to challenge the idea of negative concepts and positive concepts. It is a story that hopes to strike a balance in a person's way of life and reflect the signs of imbalance." button="Details"></Cards>
                <Cards img={Profile} title="Clockwork and Its Broken Time" desc="What does it mean for time to go forward? In the first place, do people percieve time the same way as you do? This is a short story about how a person dances with dangerous thoughts and time itself." button="Details"></Cards>
                <Cards img="https://picsum.photos/id/237/200/300" title="The Eternity That Never Lasted" desc="An eternity. The concept of time may as well cease to exist. What can people do with their lives in this moment? Not much. After all, this is a story that breaks this seemingly infinite moment." button="Details"></Cards>
            </CardGroup>
            <div
                class="row justify-content-center align-items-center g-2"
            >
                <div class="col"><Single></Single></div>
                <div class="col">Column</div>
                <div class="col">Column</div>
            </div>
            
         </div>
        </div>
    )
}

function About() {
    return (
        <div className="content-about">
            <h1>About Me</h1>
        </div>
    )
}

//Functional Component
const MyComponent = (props) => {
    //something
    
    console.log("Welcome ran");
    return(
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <About></About>
            <Section></Section>
        </div>
    )
    /*
    <h1><Welcome surname="Kurusu" project="Fusion"></Welcome></h1>
    <h1>Hi! I am {props.name}. This is MyComponent</h1>
    <p>This is a simple {props.project} component.</p>
    */
}

export default MyComponent;