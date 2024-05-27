import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import Footer from "../Footer";
import { useRef } from "react";
import "./Album.css"
// import "./AudioPlayer.js";

export default function Album(props) {
    const audioFilePath = "/music/fullstepdownFCAmC.mp3";
    const audioRef = useRef(null);
  
    const handlePlay = () => {
      audioRef.current.play();
    };
  
    const handlePause = () => {
      audioRef.current.pause();
    };
    


    return (
        <div>
            <h1 className="album">{props.name}</h1>
            <audio ref={audioRef} 
                controls
                controlsList="nodownload">
                <source src={audioFilePath} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
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
            <Footer />
        </div>
    )
}