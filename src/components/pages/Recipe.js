import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Recipe.css"

export default function Recipe(props) {
    var data = require('../../recipes/' + props.data);
    var preamble = data.preamble;
    var sections = data.sections;
    var ingredients = data.ingredients;
    var instructions = data.instructions;
    var credit = data.credit;

    return (
        <div>
            <div className="image-title">
                <h1 className="recipe">{props.title}</h1>
                <img className="recipe-img" src={props.src} />
            </div>
            <div className="recipe-container">
                <div className="preamble-container">
                { preamble !== null && 
                    <div className="preamble">
                        { preamble["Prep Time"] != null &&
                            <h2 className="prep-time">Prep Time: {preamble["Prep Time"]}</h2>
                        }

                        { preamble["Proving Time"] != null &&
                            <h2 className="prove-time">Prove Time: {preamble["Proving Time"]}</h2>
                        }

                        { preamble["Cook Time"] != null &&
                            <h2 className="cook-time">Cook Time: {preamble["Cook Time"]}</h2>
                        }

                        { preamble["Total Time"] != null &&
                            <h2 className="total-time">Total Time: {data.preamble["Total Time"]}</h2>
                        }
                    </div>
                }
                </div>
                <div className="secitions-container">
                    { Object.values(sections).map((section, index) => {
                        var keys = Object.keys(sections)

                        return (
                            <div className="section {section}">
                                <div className="ingredients">
                                    <ul className="ingredients-list">
                                        <h1 className="ingredients-title">Ingredients: {keys[index]}</h1>
                                        { section.ingredients.map(ingredient => (<li className="ingredient {ingredient}">{ingredient}</li>)) }
                                    </ul>
                                </div>
                                <div className="instructions">
                                    <ol className="instructions-list">
                                        <h1 className="instructions-title">Instructions: {keys[index]}</h1>
                                        { section.instructions.map(instruction => (<li className="instruction {instruction}">{instruction}</li>)) }
                                    </ol>
                                </div>
                            </div>
                        )
                    }) }

                </div>
                <div className="credit-container">
                    <pre className="credit">Credit: {credit}</pre>
                </div>
                {/* <hr className="thin-line" /> */}

            </div>
            <Footer />
        </div>
    )
}