import React from "react";
import "./AlbumHeader.css"

export default function AlbumHeader(props) {
    return(
        <>
            <div className="album-header-container">
                <img className="album-header-photo" src={props.src} />
                <div className="album-header-words">
                    <div className="album-header-title">{props.name}</div>
                    <div className="album-header-description">{props.description}</div>
                </div>
            </div>
        </>
    )
}

