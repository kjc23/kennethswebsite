import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./StudyHome.css";

export default function StudyHome(props) {

    const studies = [
        { name: "1 Peter 1:13-2:3", fileName: "1 Peter 1 13-2 3", book: "1 Peter" },
        { name: "1 Peter 2:11-25", fileName: "1 Peter 2 11-25", book: "1 Peter" },
        { name: "1 Peter 3:8-17", fileName: "1 Peter 3 8-17", book: "1 Peter" },
        { name: "1 Peter 4:12-19", fileName: "1 Peter 4 12-19", book: "1 Peter" },
        { name: "2 Peter 1:1-11", fileName: "2 Peter 1 1-11", book: "2 Peter"},
        { name: "2 Peter 2", fileName: "2 Peter 2", book: "2 Peter" },
        { name: "Micah 2", fileName: "Micah 2", book: "Micah" },
        { name: "Micah 4", fileName: "Micah 4", book: "Micah" },
        { name: "Micah 6", fileName: "Micah 6", book: "Micah" }
    ];

    return (
        <div>
            <h1 className="bible">{props.name}</h1>
            <div className="studies-list-container">
                <ul className="studies-list">
                    {studies.map((study, index) => {
                        if (study.book == props.name){
                            return (
                                    <li key={index}>
                                        <a href={`/kennethswebsite/studies/${study.fileName}.html`}>
                                            <div className="study-title">
                                                {study.name}
                                            </div>
                                        </a>
                                    </li>
                            )
                        }
                    })}
                </ul>
            </div>
            <Footer />
        </div>
    )
}