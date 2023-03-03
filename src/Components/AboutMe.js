import React from 'react';
import './aboutMe.css';
import 'aos/dist/aos.css'
import SpanComponent from './SpanComponent.js'

const AboutMe = () => {



    return (
        <div id='aboutMe'>

            <div className="custom-shape-divider-top-1671031438">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

            <div className='aboutMe-container'>
                <div className='am-text-container' data-aos="fade-up"
                    data-aos-duration="1000">
                    <span className='spanHolder' data-aos="jello-horizontal">
                        <SpanComponent value="W" />
                        <SpanComponent value="I" />
                        <SpanComponent value="T" />
                        <SpanComponent value="A" />
                        <SpanComponent value="J" />
                        <SpanComponent value="," />
                    </span>
                    <p data-aos="jello-horizontal">Jestem 20-letnim studentem Politechniki Łódzkiej,
                        posiadającym już kilka lat doświadczenia w
                        pisaniu kodu i myślenia
                        programistycznego.
                        W przeszłości miałem już styczność z pracą
                        i wiem z czym ona się wiąże. Dążę do
                        zostania Front-End Developerem, bo
                        właśnie w stronach internetowych
                        odkryłem swoje zainteresowanie i pasję.
                        Poszukuję możliwości uzyskania
                        doświadczenia zawodowego, aby
                        być bliżej osiągnięcia celu.</p>
                </div>
                <div className='photoHolder'>
                    <img src='Photos/about.svg' data-aos="fade-up"
                        data-aos-duration="1000" alt='vectorPhoto'></img>
                </div>
            </div>

            <div className="custom-shape-divider-bottom-1671026243">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
};

export default AboutMe;

//photo authors
//<a href="https://www.freepik.com/free-vector/hand-coding-concept-illustration_21532468.htm?query=programming&collectionId=2242&page=2&position=5&from_view=collections">Image by storyset</a> on Freepik
//<a href="https://www.freepik.com/free-vector/cross-platform-software-concept-illustration_18407472.htm?query=programming&collectionId=2242&page=2&position=6&from_view=collections">Image by storyset</a> on Freepik
//<a href="https://www.freepik.com/free-vector/low-code-development-concept-illustration_18407473.htm?query=programming&collectionId=2242&page=2&position=4&from_view=collections">Image by storyset</a> on Freepik
