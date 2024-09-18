import logo from './logo.svg';
import './App.css';
import React from "react";
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

function Section() {
    
    return (
        <div className="App-section">
          <div class="col-lg-6 col-md-8 mx-auto" valign="center">
            <h1 class="fw-light" id="portfolio">Section Samples</h1>
            <h6 class="lead"><p>Memories gathered from the stories of the mind.</p></h6> 
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