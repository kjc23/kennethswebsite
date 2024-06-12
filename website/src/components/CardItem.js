import React from "react";
import { Link } from "react-router-dom";

export default function CardItem(props) {
    return(
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" >
                        <img src={props.src} alt="Travel" className="cards__item__img" />
                        <figcaption className="cards_item_text_overlay">{props.text}</figcaption>
                    </figure>
                </Link>
            </li>
        </>
    )
}