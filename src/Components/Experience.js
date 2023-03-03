import React from "react";
import "../App.css"
import ExperienceColumn from "./ExperienceColumn";
import MySpanComponent from "./SpanComponent";
function Experience() {

    const [index, setIndex] = React.useState(0);
    const experienceColumns = [0, 1, 2, 3, 4];


    return (
        <div id="experience">
            <div className="experience-container">

                <div className="spanContainer">
                    <MySpanComponent value="H" color="black" />
                    <MySpanComponent value="I" color="black" />
                    <MySpanComponent value="S" color="black" />
                    <MySpanComponent value="T" color="black" />
                    <MySpanComponent value="O" color="black" />
                    <MySpanComponent value="R" color="black" />
                    <MySpanComponent value="I" color="black" />
                    <MySpanComponent value="A" color="black" />
                    <span className="space" />
                    <MySpanComponent value="I" color="black" />
                    <span className="space" />
                    <MySpanComponent value="R" color="black" />
                    <MySpanComponent value="O" color="black" />
                    <MySpanComponent value="Z" color="black" />
                    <MySpanComponent value="W" color="black" />
                    <MySpanComponent value="Ó" color="black" />
                    <MySpanComponent value="J" color="black" />
                </div>




                <div className="fd-r flexC bx-s p-5 br-5 expData-container">
                    <div className="experiencePhoto m-5">
                        <img src="./Photos/experience.svg" alt="" />
                    </div>
                    <div className="flexC fd-c m-5 ">
                        <div className="column-holder" >
                            <div className="slideShowSlider flexC fd-r" style={{ transform: `translate3d(${-index * 20}%,0,0)` }}>
                                <ExperienceColumn bottomData="2018" number="01" topic="Pierwsze Kroki" desc="Początki nauki HTML/CSS. Przeszukiwanie zasobów internetowych, aby poszerzać swą wiedzę" />
                                <ExperienceColumn topData="2019" number="02" topic="Rozwój" desc="Krok w animacje CSS. Początek korzystania z flexbox/grid layout" />
                                <ExperienceColumn bottomData="2020" number="03" topic="JavaScript" desc="Zagłębienie się w język JavaScript. Pisanie pierwszych skryptów, współpracujących z grami przeglądarkowymi" />
                                <ExperienceColumn topData="2021" number="04" topic="Kursy" desc="Zakończenie kilku kursów internetowych związanych z tematyką tworzenia stron internetowych." />
                                <ExperienceColumn bottomData="2022" number="05" topic="Studia" desc="Rozpoczęcie studiów zaocznych na kierunku Informatyka. Początek nauki biblioteki React." />
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