import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import "../App.css";


export default function HeroSection() {
    return(
        <div className="hero-container">
            <video src="../../public/videos/edited_body_building.mp4" autoPlay loop muted />
            <h1>AMATEUR BODY BUILDERS OF SCOTLAND</h1>
            <p></p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline"
                buttonSize="btn--large">GET STARTED
                </Button>
                <Button className="btns" buttonStyle="btn--primary"
                buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}