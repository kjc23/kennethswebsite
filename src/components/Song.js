import React from "react";
import "./Song.css";

export default function Song(props) {

    return (
        <div className="song">
            <div className="song-container">
                <h2 className="song-name">{props.name}</h2>
                <audio className="song-audio"
                    controls
                    controlsList="nodownload">
                    <source src={props.file} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}