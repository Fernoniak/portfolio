import React from "react";
import "../App.css"
import SkillsData from "./SkillsData.js"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'first-linezzz',
});

function Skills() {
    return (
        <div className="skillsContainer">
            <div id="skills">
                <div className="leftSideOfSkills">
                    <div className="skillsHolder">
                        <div className="arrowsHolder">
                            <div className="circleBorder">
                                <div data-aos="fade-up-right" data-aos-delay="500" className="skillsCircle">
                                    <h2>Moje umiejętności</h2>
                                </div>
                            </div>

                            <div className="arrowDotTopRight"></div>
                            <div className="arrowDotBottomRight"></div>

                        </div>
                        <div className="arrowDotTop"></div>
                        <div className="arrowDotRight"></div>
                        <div className="arrowDotBottom"></div>


                    </div>


                    <svg className="linesSvg" height="685px" width="200px" xmlns="http://www.w3.org/2000/svg">
                        <line className="firstLine1" x1="52px" y1="31%" x2="185px" y2="0%" stroke="whitesmoke" strokeWidth="4px"></line>
                        <line className="firstLine2" x1="142px" y1="36.5%" x2="184px" y2="24.9%" stroke="whitesmoke" strokeWidth="4px"></line>
                        <line className="firstLine3" x1="142px" y1="63.5%" x2="184px" y2="75.1%" stroke="whitesmoke" strokeWidth="4px"></line>
                        <line className="firstLine4" x1="51px" y1="68.9%" x2="185px" y2="100%" stroke="whitesmoke" strokeWidth="4px"></line>
                    </svg>

                    <svg height="685px" width="100px" xmlns="http://www.w3.org/2000/svg">
                        <line className="secondLine secondLine1" x1="0px" y1="0%" x2="100px" y2="0%" stroke="whitesmoke" strokeWidth="8px"></line>
                        <line className="secondLine secondLine2" x1="0px" y1="25%" x2="100px" y2="25%" stroke="whitesmoke" strokeWidth="4px"></line>
                        <line className="secondLine secondLine3" x1="0px" y1="50%" x2="100px" y2="50%" stroke="whitesmoke" strokeWidth="4px"></line>
                        <line className="secondLine secondLine4" x1="0px" y1="75%" x2="100px" y2="75%" stroke="whitesmoke" strokeWidth="4px"></line>
                        <line className="secondLine secondLine5" x1="0px" y1="100%" x2="100px" y2="100%" stroke="whitesmoke" strokeWidth="8px"></line>
                    </svg>

                </div>
                <div className="skillsData">

                    <SkillsData title="HTML" desc="Posługiwanie się atrybutami globalnymi i eventowymi, znacznikami META i większością elementów HTML" number="01s" />
                    <SkillsData title="CSS" desc="Tworzenie animacji, szybkie ustawianie elementów na stronie, duża znajomość właściwości i pseudo-klas CSS" number="02s" />
                    <SkillsData title="JavaScript" desc="Umiejętność tworzenia skryptów, funkcji, animacji on scroll. Operowanie na tablicach, obiektach i danych" number="03s" />
                    <SkillsData title="React" desc="Ukończony kurs z podstaw biblioteki React. Używanie useState oraz useEffect. Tworzenie komponentów i czytelnego kodu" number="04s" />
                    <SkillsData title="Ogólne" desc="Styczność z programowaniem od ponad 5-ciu lat. Stale rozwijany sposób myślenia i rozwiązywania problemów" number="05s" />


                </div>
            </div>
        </div>
    )

}

export default Skills;