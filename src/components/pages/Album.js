import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Album.css"
import Song from "../Song";

export default function Album(props) {

    return (
        <div>
            <h1 className="album">{props.name}</h1>
            <div className="songs-container">
                <ul className="songs-container ul">
                    <Song name="Full Step Down" file="/kennethswebsite/music/fullstepdownFCAmC.mp3" />
                    {/* <div id="audio-player-container">
                        <audio src={audioFilePath} preload="metadata" loop></audio>
                        <p>Full Step Down</p>
                        <button id="play-icon"></button>
                        <span id="current-time" class="time">0:00</span>
                        <input type="range" id="seek-slider" max="100" value="0" />
                        <span id="duration" class="time">0:00</span>
                        <output id="volume-output">100</output>
                        <input type="range" id="volume-slider" max="100" value="100" />
                        <button id="mute-icon"></button>
                    </div> */}
                    <Song name="Open D" file="/kennethswebsite/music/Open D Aug 14 2023.mp3" />
                    <Song name="Orion" file="/kennethswebsite/music/OrionTEST.mp3" />
                    <Song name="A Waltz in a Cornfield" file="/kennethswebsite/music/A Waltz in a Cornfield.mp3" />
                </ul>
            </div>
            <Footer />
        </div>
    )
}