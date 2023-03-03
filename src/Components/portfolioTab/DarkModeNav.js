import React from "react"
import "./darkmode.css"


export default function Navbar(props) {
    return (
        <nav
            id="darkmodeNav"
            className={props.darkMode ? "dark" : ""}
        >
            <h3 className="nav--logo_text">React-Tenzies</h3>

            <div
                className="toggler"
            >
                <p className="toggler--light">Light</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}