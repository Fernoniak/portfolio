import React from "react";
import "../App.css"
function ExperienceColumn(data) {




    return (

        <div className="columnContainer">
            {data.topData && <div className="columnText"><p>{data.topData}</p></div>}
            <div className="column">
                <div className="topColumn">
                    <div className="topOfColumn">
                        <div className="iconBorder">
                            <div className="logoHolder">
                                <img className="iconLogo" src={'Icons/' + data.number + '.png'} alt={'icon ' + data.number} />
                            </div>
                        </div>

                    </div>
                    <div className="topOfColumnBorder"></div>
                    <div className="arrow"></div>

                </div>
                <div className="middleOfColumn">
                    <div className="columnDesc">
                        <h3>{data.topic}</h3>
                        <br />
                        <p>{data.desc}</p>
                    </div>
                    <div className="middleOfColumnBorder"></div>
                </div>

                <div className="bottomColumn">
                    <div className="bottomOfColumn"></div>
                    <p>{data.number}</p>
                </div>

            </div>
            {data.bottomData && <div className="columnText"><p>{data.bottomData}</p></div>}
        </div>
    )
}

export default ExperienceColumn;