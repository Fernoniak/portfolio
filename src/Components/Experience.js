import React from "react";
import "../App.css"
import ExperienceColumn from "./ExperienceColumn";
import MySpanComponent from "./SpanComponent";
function Experience() {

    const [index, setIndex] = React.useState(0);
    const experienceColumns = [0, 1, 2, 3, 4];

    const text = "HISTORIA I ROZWÓJ"
    let textArray = []

    for (const char of text) {
        textArray.push(char)
    }
    const textContent = textArray.map((el, idx) => el === " " ? <span key={`${idx}`} className="space"></span> : <MySpanComponent key={`${idx}`} value={`${el}`} color="black" />)
    const experienceData = [{ bottomData: "2018", number: "01", topic: "Pierwsze Kroki", desc: "Początki nauki HTML/CSS. Przeszukiwanie zasobów internetowych, aby poszerzać swą wiedzę" }, { bottomData: "2019", number: "02", topic: "Rozwój", desc: "Krok w animacje CSS. Początek korzystania z flexbox/grid layout" }, { bottomData: "2020", number: "03", topic: "JavaScript", desc: "Zagłębienie się w język JavaScript. Pisanie pierwszych skryptów, współpracujących z grami przeglądarkowymi" }, { bottomData: "2021", number: "04", topic: "Kursy", desc: "Zakończenie kilku kursów internetowych związanych z tematyką tworzenia stron internetowych." }, { bottomData: "2022", number: "05", topic: "Studia", desc: "Rozpoczęcie studiów zaocznych na kierunku Informatyka. Początek nauki biblioteki React." }]
    const experienceContent = experienceData.map((el, idx) => <ExperienceColumn key={`${idx}`} bottomData={`${el.bottomData}`} number={`${el.number}`} topic={`${el.topic}`} desc={`${el.desc}`} />)

    return (
        <div id="experience">
            <div className="experience-container">
                <div className="spanContainer">
                    {textContent}
                </div>
                <div className="fd-r flexC bx-s p-5 br-5 expData-container">
                    <div className="experiencePhoto m-5">
                        <img src="./Photos/experience.svg" alt="" />
                    </div>
                    <div className="flexC fd-c m-5 ">
                        <div className="column-holder" >
                            <div className="slideShowSlider flexC fd-r" style={{ transform: `translate3d(${-index * 20}%,0,0)` }}>
                                {experienceContent}
                            </div>
                        </div>
                        <div className="slideshowDots fd-r flexC">
                            {experienceColumns.map((_, idx) => (
                                <div onClick={() => {
                                    setIndex(idx);
                                }} key={idx} className={`slideshowDot${index === idx ? " activeDot" : ""}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience;