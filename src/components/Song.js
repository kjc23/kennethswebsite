import React from "react";
import "./Song.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMusic } from '@fortawesome/free-brands-svg-icons';

export default function Song(props) {

    return (
        <div className="song">
            {/* <div className="picture-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>
            </div> */}
            <div className="song-container">
                <h2 className="song-name"><a href={"#/music/" + props.name}>{props.name}</a></h2>
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