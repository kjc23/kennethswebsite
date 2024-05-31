import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards"
import Footer from "../Footer";
import Header from "../Header";

export default function Home() {
    return(
        <>
            {/* <HeroSection /> */}
            <Header />
            <Cards />
            <Footer />
        </>
    )
}

