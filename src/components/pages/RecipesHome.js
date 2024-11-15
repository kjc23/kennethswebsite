import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./RecipesHome.css";
import CardItem from "../CardItem";

export default function RecipesHome(props) {



    return (
        <div>
            <h1 className="recipes">Recipes</h1>
                <div className="recipe-section">
                <h2 className="meal-type">Dinners</h2>
                <div className="recipe-cards">
                    <div className="cards__container">
                        <div className="recipe_cards__wrapper">
                            {/* <ul className="cards__items"> */}
                            <div className="recipe-card">
                                <CardItem
                                src="/kennethswebsite/images/teriyaki-chicken.webp"
                                text="Instant Pot Teriyaki Chicken"
                                path="/recipes/instantpot-teriyaki-chicken"
                                />
                            </div>
                            <div className="recipe-card">
                                <CardItem
                                src="/kennethswebsite/images/cabbage-potatoes-sausage.jpeg"
                                text="Cabbage, Potatoes, and Sausage One Dish"
                                path="/recipes/cabbage-potatoes-sausage"
                                />
                            </div>
                            {/* </ul> */}
                        </div>
                    </div>
                </div>
                </div>
                <div className="recipe-section">
                <h2 className="meal-type">Desserts</h2>
                <div className="recipe-cards">
                    <div className="cards__container">
                        <div className="recipe_cards__wrapper">
                            {/* <ul className="cards__items_recipes"> */}
                                <CardItem
                                src="/kennethswebsite/images/choccoffpie.webp"
                                text="Chocolate-Coffee Silk Pie"
                                path="/recipes/chocolate-coffee-silk-pie"
                                />
                            {/* </ul> */}
                        </div>
                    </div>
                </div>
                </div>
                <div className="recipe-section">
                <h2 className="meal-type" id="bread">Bread</h2>
                <div className="recipe-cards">
                    <div className="cards__container">
                        <div className="recipe_cards__wrapper">
                            {/* <ul className="cards__items_recipes"> */}
                            <CardItem
                                src="/kennethswebsite/images/gfbread.jpg"
                                text="Gluten Free Bread"
                                label="St Andrews"
                                path="/recipes/gluten-free-bread"
                                />
                            {/* </ul> */}
                        </div>
                    </div>
                </div>
                </div>
            
                {/* <ul className="cards__items">
                </ul> */}
            <Footer />
        </div>
    )
}
