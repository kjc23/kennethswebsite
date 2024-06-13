import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import Footer from "../Footer";

export default function Bible() {
    return (
        <div>
            <h1 className="bible">Bible</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="/kennethswebsite/images/1Peter.jpeg"
                        text="1 Peter"
                        // label="Adventure"
                        path="/bible/1Peter"
                        />
                        <CardItem
                        src="/kennethswebsite/images/2Peter.jpeg"
                        text="2 Peter"
                        label="Luxury"
                        path="/bible/2Peter"
                        />
                        <CardItem
                        src="/kennethswebsite/images/micah.webp"
                        text="Micah"
                        label="Luxury"
                        path="/bible/Micah"
                        />
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}