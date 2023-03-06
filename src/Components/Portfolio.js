import React from "react";
import './ContactAndPortfolio.css'
import SpanComponent from './SpanComponent.js'
import Tenzies from './portfolioTab/Tenzies.js'
import DarkModeApp from './portfolioTab/DarkModeApp'
import Chart from './portfolioTab/Chart.js'
import Slider from './portfolioTab/Slider.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

function Portfolio() {
    const text = "PORTFOLIO"
    let textArray = []
    for (const char of text) {
        textArray.push(char)
    }

    const textContent = textArray.map((el, idx) => <SpanComponent key={`${idx}`} value={`${el}`} color="black" />)
    return (
        <div className="portfolioContainer">
            <div id="portfolio">
                <div data-aos="fade-up-right" className="spanContainer">
                    {textContent}
                </div>
                <div className="tenziesContainer">
                    <div>
                        <Tenzies />
                    </div>
                    <DarkModeApp />
                </div>
                <div className="chart">
                    <h3>Wykres danych stworzony w ChartJS, korzystając z API bazy danych</h3>
                    <Chart />
                </div>
                <h3>Slider JS, Draggable + extra effects</h3>
                <Slider />
            </div>
        </div>
    )
}

export default Portfolio