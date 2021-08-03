import React from 'react'
import {Button} from "./Button"
import "../design/HeroSection.css"
import "../App.css"


export default function HeroSection() {

    return (
        <div className="hero-container" id="home">
                <h1> Picto.design</h1>
                <p>The real deal coming soon! </p>
            <div className="hero-btns">
                <Button className="btns" where ="/login" buttonSize ="btn--large" buttonStyle="btn--outline"> Log in </Button>
                <Button className="btns" buttonSize ="btn--large" buttonStyle="btn--primary"> Read more </Button>
            </div>
        </div>
    )
}
