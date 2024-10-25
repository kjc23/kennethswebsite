import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Album.css"
import Song from "../Song";
import AlbumHeader from "../AlbumHeader";

export default function Album(props) {

    return (
        <div>
            <AlbumHeader name={props.name} description="Kenneth Cain • 2024" src="/kennethswebsite/images/albums/Judson(edited).jpg"/>
            <div className="songs-container">
                <hr className="thin-line" />
                <ul className="songs-container ul">
                    <Song name="Hiatus" file="/kennethswebsite/music/fullstepdownFCAmC.mp3" />
                    <Song name="It's Okay" file="/kennethswebsite/music/It's Okay mastered.mp3" />
                    <Song name="Eve" file="/kennethswebsite/music/Eve.mp3" />
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
                    <Song name="Alle Zeit der Welt" file="/kennethswebsite/music/Alle die Zeit in der Welt (final).m4a" />
                    <Song name="Interlude" file="/kennethswebsite/music/Interlude 6_8_22.mp3" />
                    <Song name="Orion" file="/kennethswebsite/music/OrionTEST.mp3" />
                    <Song name="A Waltz in a Cornfield" file="/kennethswebsite/music/A Waltz in a Cornfield.mp3" />
                </ul>
            </div>
            <Footer />
        </div>
    )
}