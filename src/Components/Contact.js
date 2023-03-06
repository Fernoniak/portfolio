import React from "react";
import './ContactAndPortfolio.css'
function Contact() {
    return (
        <div id="contact">
            <div className="leftContact">
                <h2>Napisz do mnie!</h2>
                <p>Odpowiem na pytania, prześlę CV i zastanowimy się wspólnie nad możliwością współpracy</p>
                <div><img src='Photos/mindMap.svg' alt="mindmap"></img></div>
            </div>
            <div className="rightContact">
                <a href="mailto:jkb.klimczyk@gmail.com"><div className="email">
                    <img src="./Icons/gmail.png" alt="gmailIcon" />
                    <span>jkb.klimczyk@gmail.com</span>
                </div></a>
                <br />
                <a href="https://www.facebook.com/jakub.klimczyk.75/" target="_blank" rel="noopener noreferrer"><div className="facebook">
                    <img src="./Icons/facebook.png" alt="facebookIcon" />
                    <span>Kliknij i napisz prywatnie</span>
                </div></a>
            </div>
        </div>
    )
}
export default Contact