import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./RecipesHome.css";
import CardItem from "../CardItem";

export default function RecipesHome(props) {



    return (
        <div>
            <h1 className="recipes">Recipes</h1>
            <div className="cards">
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem
                            src="/kennethswebsite/images/gfbread.jpg"
                            text="Gluten Free Bread"
                            label="St Andrews"
                            path="/recipes/gluten-free-bread"
                            />
                            <CardItem
                            src="/kennethswebsite/images/cabbage-potatoes-sausage.jpeg"
                            text="Cabbage, Potatoes, and Sausage One Dish"
                            path="/recipes/cabbage-potatoes-sausage"
                            />
                            <CardItem
                            src="/kennethswebsite/images/choccoffpie.webp"
                            text="Chocolate-Coffee Silk Pie"
                            path="/recipes/chocolate-coffee-silk-pie"
                            />
                        </ul>
                        <ul>
                            <CardItem
                            src="/kennethswebsite/images/teriyaki-chicken.webp"
                            text="Instant Pot Teriyaki Chicken"
                            path="/recipes/instantpot-teriyaki-chicken"
                            />
                        </ul>
                        {/* <ul className="cards__items">
                        </ul> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}