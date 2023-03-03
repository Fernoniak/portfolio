import React from "react";
import 'aos/dist/aos.css'
function SkillsData(props) {
    return (
        <div className="skillContainer">
            <div data-aos="jello-horizontal" data-aos-delay="500" className="skillIcon">
                <img data-aos="zoom-out-down" className="skillIconLogo" src={'Icons/skillsIcons/' + props.number + '.png'} alt={'icon ' + props.number} />
            </div>
            <div className="skillDesc">
                <h3 data-aos="zoom-out-down ">{props.title}</h3>
                <p data-aos="zoom-out-down"> {props.desc}</p>

            </div>
        </div>
    )
}

export default SkillsData;