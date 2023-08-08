import React from "react";
import Banner from "../../components/Banner";
import Presentation from "../../components/Presentation";
import Collapse from "../../components/Collapse";
import Footer from '../../components/Footer';
import aboutText from '../../datas/about-text.json'

function About() {
    return (
        <React.Fragment>
        <Banner />
        <Presentation />
        {aboutText.map((category, index) => (
            <Collapse 
                key={`${category.id}-${index}`}
                title={category.title}
                text={category.text}
            />
        ))}
        <Footer />
    </React.Fragment>
    )
}

export default About;