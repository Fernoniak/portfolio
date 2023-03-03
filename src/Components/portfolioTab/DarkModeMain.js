import React from "react"
import "./darkmode.css"


export default function Main(props) {
    return (
        <main id="darkmode" className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">O Tenzies</h1>
            <ul className="main--facts">
                <li>Gra napisana w 100% przy wykorzystaniu biblioteki React</li>
                <li>Korzysta z nanoid oraz mapowania tablic</li>
                <li>Wykorzystuje useEffect oraz useState + operacje na obiektach i tablicach</li>
                <li>Każda kostka to komponent, do którego są przekazywane informacje (props)</li>
                <li>Stworzona od zera podczas kursu z React</li>
            </ul>
        </main>
    )
}