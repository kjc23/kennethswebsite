import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./RecipesHome.css";
import CardItem from "../CardItem";

export default function RecipesHome(props) {



    return (
        <div>
            <h1 className="recipes">Recipes</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="/kennethswebsite/images/gfbread.jpg"
                        text="Album 1"
                        label="St Andrews"
                        path="/recipes/gluten-free-bread"
                        />

                    </ul>
                    {/* <ul className="cards__items">
                    </ul> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}