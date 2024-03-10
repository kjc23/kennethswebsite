import React from "react";
import "../../App.css";
import CardItem from "../CardItem";

export default function SignUp() {
    return (
        <div>
            <h1 className="sign-up">SIGN UP</h1>
            <h1>Please Select the Competition you want to sign up for.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/st-andrews.png"
                        text="St. Andrews Competition"
                        label="St Andrews"
                        path="/st-andrews"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}