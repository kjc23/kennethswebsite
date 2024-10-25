import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./RecipesHome.css";
import CardItem from "../CardItem";

export default function RecipesHome(props) {



    return (
        <div>
            <h1 className="recipes">Recipes</h1>
                <h2 className="meal-type">Dinners</h2>
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards__items">
                                <CardItem
                                src="/kennethswebsite/images/teriyaki-chicken.webp"
                                text="Instant Pot Teriyaki Chicken"
                                path="/recipes/instantpot-teriyaki-chicken"
                                />
                                <CardItem
                                src="/kennethswebsite/images/cabbage-potatoes-sausage.jpeg"
                                text="Cabbage, Potatoes, and Sausage One Dish"
                                path="/recipes/cabbage-potatoes-sausage"
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <h2 className="meal-type">Desserts</h2>
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards__items_recipes">
                                <CardItem
                                src="/kennethswebsite/images/choccoffpie.webp"
                                text="Chocolate-Coffee Silk Pie"
                                path="/recipes/chocolate-coffee-silk-pie"
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <h2 className="meal-type">Bread</h2>
                <div className="cards">
                    <div className="cards__container">
                        <div className="cards__wrapper">
                            <ul className="cards__items_recipes">
                            <CardItem
                                src="/kennethswebsite/images/gfbread.jpg"
                                text="Gluten Free Bread"
                                label="St Andrews"
                                path="/recipes/gluten-free-bread"
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            
                {/* <ul className="cards__items">
                </ul> */}
            <Footer />
        </div>
    )
}
