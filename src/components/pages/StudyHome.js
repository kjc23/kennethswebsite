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
        { name: "Micah 6", fileName: "Micah 6", book: "Micah" },
        { name: "Mark 1:16-39", fileName: "Mark 1 16-39", book: "Mark" },
        { name: "Mark 2:18-3:35", fileName: "Mark218-335", book: "Mark" },
        { name: "Mark 4:35-5:43", fileName: "Mark 4 35-5 43", book: "Mark" },
        { name: "Mark 6:53-7:23", fileName: "Mark 6 53-7 23", book: "Mark" },
        { name: "Mark 9:1-29", fileName: "Mark 9 1-29", book: "Mark" },
	    { name: "Mark 9:30-10:12", fileName: "Mark 9 30-10 12", book: "Mark" },
        { name: "Mark 11:27-12:17", fileName: "Mark 11 27-12 17", book: "Mark" }
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
