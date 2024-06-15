import React from "react";
import CardItem from "./CardItem";
import "./Cards.css"

export default function Cards() {
    return (
        <div className="cards">
            {/* <h1></h1> */}
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="/kennethswebsite/images/bible2.jpeg"
                        text="Bible"
                        // label="Adventure"
                        path="/bible"
                        />
                        <CardItem
                        src="/kennethswebsite/images/music.webp"
                        text="Music"
                        label="Luxury"
                        path="/music"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="/kennethswebsite/images/recipes.webp"
                        text="Recipes"
                        label="Adventure"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}