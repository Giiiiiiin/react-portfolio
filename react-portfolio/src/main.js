import './App.css';
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Profile from './profile.png';
import Card1 from './project1.jpg';
import Card2 from './project2.jpg';
import Card3 from './project3.jpg';
import Sparkle from './sparkle.jpg';
import Firefly from './firefly.jpg';
import Verina from './verina.jpg';
import Yinlin from './yinlin.png';
import BG1 from './bg1.jpg';
import BG2 from './bg2.jpg';
import BG3 from './bg3.jpg';

//

function NavBar() {
    return (    
        <div class="container-fluid navigation">
         <nav class="navbar navbar-expand navbar-dark bg-dark resize" aria-label="Second navbar example" style={{width: '70vw', height: '10vh', padding: '1rem' }}>
            <h2><a class="navbar-brand" href="#">Memories Project</a></h2>
             <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    )
}

function Banner() {
    return (
        <header className="App-header">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-bold">Memory Project Samples</h1>
            <h5 class="lead"><p>Memories gathered from the stories of the mind.</p></h5> 
         </div>
        </header>
    )
}

function ModalPop(props) {

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>{props.title}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{props.sub}</h4>
            <p align="justify">
                {props.content}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      )
}

function ModalContact(props) {

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h1>{props.title}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{props.sub}</h4>
            <div class="container-sm" style={{padding: '1rem', }}>
                <form class="row g-3 needs-validation form" action="malisa-miguel-webdevte1.html" onsubmit="alert('Message successfully sent!')">
                    <div class="row">
                        <label for="validationCustom01" class="form-label">Name</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Mark Shark" required />
                    </div>
                    <div class="row">
                        <label for="validationCustom02" class="form-label">Email</label>
                        <input type="email" class="form-control" id="validationCustom02" placeholder="mark@gmail.com" required />
                    </div>
                    <div class="row">
                        <label for="" class="form-label">Message</label>
                        <textarea class="form-control" name="" id="" rows="3" placeholder="Talk to us..." required></textarea>
                    </div>
                    <div class="col-12" align="center">
                        <button class="btn btn-primary" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      )
}

/*
function SingleCards(props) {
    
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
function Transition(props) {
    return (
        <div className='content-about' style={{
            backgroundImage: `linear-gradient( ${props.colorTop}, ${props.colorBot})`
        }}>
            <h1>{props.message}</h1>
        </div>
    )
}

function About() {
    const [modalContactShow, setModalContactShow] = useState(false);

    return (
        <div className="content-about" id="about">
            <h1 style={{margin: '5rem'}}>About Me</h1>
            <div
                class="row justify-content-center align-items-center g-2"
            >
                <div class="col">
                    <div
                        class="row justify-content-center align-items-center g-2"
                    >
                        <div class="col"><img className='rounded-circle' src={Sparkle} style={{width: '3rem', height: '3rem',}} /></div>
                    </div>
                    <div
                        class="row justify-content-center align-items-center g-2"
                    >
                        <div class="col"><img className='rounded-circle' src={Yinlin} style={{width: '3rem', height: '3rem',}} /></div>
                        <div class="col"><img className='rounded-circle' src={Profile} style={{width: '10rem', height: '10rem', margin: '1rem'}} /></div>
                        <div class="col"><img className='rounded-circle' src={Firefly} style={{width: '3rem', height: '3rem',}} /></div>
                    </div>
                    <div
                        class="row justify-content-center align-items-center g-2"
                    >
                        <div class="col"><img className='rounded-circle' src={Verina} style={{width: '3rem', height: '3rem',}} /></div>
                    </div>
                </div>
                <div class="col">
                    <div
                        class="row justify-content-center align-items-center g-2"
                    >
                        <div class="col"><h5 style={{padding: '1rem'}}>The Average Computer Science Student</h5></div>
                    </div>
                    <div
                        class="row justify-content-center align-items-center g-2"
                    >
                        <div class="col"><h6 class="fw-bold" style={{padding: '1rem'}}>"The power to create worlds is in the palm of my hands. Yet, I am only nothing but another character to the story."</h6></div>
                    </div>
                    <div
                        class="row justify-content-center align-items-center g-2"
                    >
                        <div class="col"><h6 class="fw-light">Unhinged Writer</h6></div>
                        <div class="col"><h6 class="fw-light">Downbad Gacha Player</h6></div>
                        <div class="col"><h6 class="fw-light">Sleepless Progammer</h6></div>
                        <div class="col"><h6 class="fw-light">Apostle of Hypnos</h6></div>
                    </div>
                    

                </div>
                <Button variant="outline-success" onClick={() => setModalContactShow(true)} style={{margin: '3rem'}}>Contact Me</Button>

                <ModalContact
                    title=      "Contact Me"
                    sub=        "miguel_malisa@dlsl.edu.ph"
                    show={modalContactShow}
                    onHide={() => setModalContactShow(false)}
                />
            </div>
        </div>
    )
}

function Section(props) {
//#282c34
    return (
        <div className="App-section" id="portfolio" style={{
            backgroundImage: `linear-gradient( to bottom, transparent 60%, ${props.colorBot} 100%), linear-gradient(to top, transparent 60%, ${props.colorTop} 100%), url("${props.background}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div
                class="row justify-content-center align-items-center g-lg-2"
                align="center"
            >
                
            <Card className="cardStyle" style={{width: '70%'}}>
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
                colorTop="#282c34"
                colorBot="#544000"
                background={BG1}
                img={Card1}
                title=  "City of Fanatical Hope" 
                desc=   "A story born to challenge the idea of negative concepts and positive concepts. 
                        It is a story that hopes to strike a balance in a person's way of life and reflect 
                        the signs of imbalance." 
                button="Details"
                onShow={() => setModal1Show(true)}
            />
            <Transition
                colorTop="#544000"
                colorBot="#541800"
                message=" "
            />
            <Section
                colorTop="#541800"
                colorBot="#000000"
                background={BG2}
                img={Card2}
                title=  "Clockwork and Its Broken Time" 
                desc=   "What does it mean for time to go forward? In the first place, 
                        do people percieve time the same way as you do? 
                        This is a short story about how a person dances with dangerous thoughts and time itself." 
                button="Details"
                onShow={() => setModal2Show(true)}
            />
            <Transition
                colorTop="#000000"
                colorBot="#151033"
                message=" "
            />
            <Section
                colorTop="#151033"
                colorBot="#000000"
                background={BG3}
                img={Card3}
                title=  "The Eternity That Never Lasted" 
                desc=   "An eternity. The concept of time may as well cease to exist. 
                        What can people do with their lives in this moment? Not much. After all, 
                        this is a story that breaks this seemingly infinite moment." 
                button="Details"
                onShow={() => setModal3Show(true)}
            />

         <ModalPop
                title=      "City of Fanatical Hope"
                sub=        "The greed that consumes."
                content=    "Hope is what gives the people power to keep moving forward. 
                            As long as the people have hope, nothing can stop them from raising their ideal kingdom.
                            But, what does it mean to have hope? People can lose hope but can they have too much of it? 
                            What does it mean for someone to have too much hope? What will happen to a city if it has too much hope? 
                            In a city built upon this single concept, will it stand as strong as the fervor they show?"
                show={modal1Show}
                onHide={() => setModal1Show(false)}
         />
         <ModalPop
                title=      "Clockwork and Its Broken Time"
                sub=        "The time which haunts the self."
                content=    "Time for everyone moves only in a single direction. Toward the future and leaving behind the past, 
                            sealing our previous actions in the bottle of history. However... is this truly the case? 
                            Much like how an ant cannot percieve the three-dimentional plain, 
                            how can mere humans say that time cannot go backward? Or maybe even... stop.
                            The flow of time that differs from person to person. A flow of time that can devour other instances.
                            The time that can consumes life of a person."
                show={modal2Show}
                onHide={() => setModal2Show(false)}
         />

         <ModalPop
                title=      "The Eternity That Never Lasted"
                sub=        "The bliss of ignorance."
                content=    "Eternal Happiness. What a wonderful ring it has in the ears. In a world where [Eternity] is exists, 
                            the people would venture towards their dreams and fulfill their deepest wishes. 
                            What can stop the people now if time was never a concern? Frolicking and frolicking...
                            Enjoying their neverending lives... The people never realized what they had lost."
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