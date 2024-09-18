import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Profile from './profile.png';
import Card1 from './project1.jpg';
import Card2 from './project2.jpg';
import Card3 from './project3.jpg';
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

function ModalOne(props) {

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>City of Fanatical Hope</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>The greed that consumes.</h4>
            <p align="justify">
                Hope is what gives the people power to keep moving forward. 
                As long as the people have hope, nothing can stop them from raising their ideal kingdom.
                But, what does it mean to have hope? People can lose hope but can they have too much of it? 
                What does it mean for someone to have too much hope? What will happen to a city if it has too much hope? 
                In a city built upon this single concept, will it stand as strong as the fervor they show?
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      )
}

function ModalTwo(props) {

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>Clockwork and Its Broken Time</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>The "time" which haunts the self.</h4>
            <p align="justify">
                Time for everyone moves only in a single direction. Toward the future and leaving behind the past, 
                sealing our previous actions in the bottle of history. However... is this truly the case? 
                Much like how an ant cannot percieve the three-dimentional plain, 
                how can mere humans say that time cannot go backward? Or maybe even... stop.
                The flow of time that differs from person to person. A flow of time that can devour other instances.
                The time that can consumes life of a person.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      )
}

function ModalThree(props) {

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>The Eternity That Never Lasted</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>The bliss of ignorance.</h4>
            <p align="justify">
                "Eternal Happiness." What a wonderful ring it has in the ears. In a world where [Eternity] is exists, 
                the people would venture towards their dreams and fulfill their deepest wishes. 
                What can stop the people now if time was never a concern? Frolicking and frolicking...
                Enjoying their neverending lives... The people never realized what they had lost.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      )
}
/*
function Cards(props) {
    
    return (
        <div>
        <Card className="cardStyle" style={{ width: '18rem'}}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.desc}
            </Card.Text>
            <Button variant="outline-primary" onClick={props.onShow}>{props.button}</Button>
          </Card.Body>
        </Card>
        </div>
      )
}

<Button variant="outline-primary" onClick={() => setModal1Show(true)}>
                Launch vertically centered modal
            </Button>
            */
function Section(props) {

    return (
        <div className="App-section">
            <div
                class="row justify-content-center align-items-center g-lg-2"
                align="center"
            >
                
            <Card className="cardStyle" style={{width: '30rem'}}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title><h2>{props.title}</h2></Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                    <Button variant="outline-primary" onClick={props.onShow}>{props.button}</Button>
                </Card.Body>
            </Card>
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
    const [modal1Show, setModal1Show] = useState(false);
    const [modal2Show, setModal2Show] = useState(false);
    const [modal3Show, setModal3Show] = useState(false);

    console.log("Welcome ran");

    return(
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <About></About>
            <Section
                img={Card1}
                title=  "City of Fanatical Hope" 
                desc=   "A story born to challenge the idea of negative concepts and positive concepts. 
                        It is a story that hopes to strike a balance in a person's way of life and reflect 
                        the signs of imbalance." 
                button="Details"
                onShow={() => setModal1Show(true)}
            />
            <Section
                img={Card2}
                title=  "Clockwork and Its Broken Time" 
                desc=   "What does it mean for time to go forward? In the first place, 
                        do people percieve time the same way as you do? 
                        This is a short story about how a person dances with dangerous thoughts and time itself." 
                button="Details"
                onShow={() => setModal2Show(true)}
            />
            <Section
                img={Card3}
                title=  "The Eternity That Never Lasted" 
                desc=   "An eternity. The concept of time may as well cease to exist. 
                        What can people do with their lives in this moment? Not much. After all, 
                        this is a story that breaks this seemingly infinite moment." 
                button="Details"
                onShow={() => setModal3Show(true)}
            />

         <ModalOne
                show={modal1Show}
                onHide={() => setModal1Show(false)}
         />
         <ModalTwo
                show={modal2Show}
                onHide={() => setModal2Show(false)}
         />

         <ModalThree
                show={modal3Show}
                onHide={() => setModal3Show(false)}
         />
        </div>
    )
    /*
    <h1><Welcome surname="Kurusu" project="Fusion"></Welcome></h1>
    <h1>Hi! I am {props.name}. This is MyComponent</h1>
    <p>This is a simple {props.project} component.</p>
    */
}

export default MyComponent;