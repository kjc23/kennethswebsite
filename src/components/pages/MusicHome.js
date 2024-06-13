import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import Footer from "../Footer";

export default function MusicHome() {
    return (
        <div>
            <h1 className="music">Music</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/albums/Judson.JPG"
                        text="Album 1"
                        label="St Andrews"
                        path="/music/Album1"
                        />
                        {/* <CardItem
                        src="images/albums/album2.jpg"
                        text="Album 2"
                        label="St Andrews"
                        path="/music/Album2"
                        /> */}
                    </ul>
                    {/* <ul className="cards__items">
                        <CardItem
                        src="images/albums/album3.jpg"
                        text="Album 3"
                        label="St Andrews"
                        path="/music/Album3"
                        />
                        <CardItem
                        src="images/albums/album4.jpg"
                        text="Album 4"
                        label="St Andrews"
                        path="/music/Album4"
                        />
                    </ul> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}