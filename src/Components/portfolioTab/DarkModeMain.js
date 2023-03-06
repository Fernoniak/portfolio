import React from "react"
import "./darkmode.css"

const dataArray = ["Gra napisana w 100% przy wykorzystaniu biblioteki React", "Korzysta z nanoid oraz mapowania tablic", "Wykorzystuje useEffect oraz useState + operacje na obiektach i tablicach", "Każda kostka to komponent, do którego są przekazywane informacje (props)", "Stworzona od zera podczas kursu z React"]
const data = dataArray.map((el, idx) => <li key={idx}>{el}</li>)
export default function Main(props) {
    return (
        <main id="darkmode" className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">O Tenzies</h1>
            <ul className="main--facts">
                {data}
            </ul>
        </main>
    )
}