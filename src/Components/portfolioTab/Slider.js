import React from "react";


document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        const slider = document.querySelector('.slider');
        let isDown = false
        let startX
        let nextPercentage = 0
        let percentage = 0
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('activeSlider');
            startX = e.pageX - slider.offsetLeft
            nextPercentage = nextPercentage + percentage
        })
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('activeSlider');
        })
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('activeSlider');
        })
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            let walk = (x - startX);
            const size = slider.scrollWidth
            percentage = (walk / (size)) * 100
            if (percentage < 0) {
                if (nextPercentage + percentage > -34) {
                    slider.style.transform = `translate(${nextPercentage + percentage}%,0%)`
                    for (const image of document.getElementsByClassName('sliderImage')) {
                        image.animate({
                            objectPosition: `${(-1 * (nextPercentage + percentage) + 34) * (1.47)}% center`
                        }, { duration: 1200, fill: "forwards" });
                    }
                    return
                }
                else {
                    nextPercentage = -34
                    percentage = 0
                    return
                }
            }
            else {
                if (nextPercentage + percentage < 34) {
                    slider.style.transform = `translate(${nextPercentage + percentage}%,0%)`

                    for (const image of document.getElementsByClassName('sliderImage')) {
                        image.animate({
                            objectPosition: `${(-1 * (nextPercentage + percentage) + 34) * (1.47)}% center`
                        }, { duration: 1200, fill: "forwards" });
                    }
                    return
                }
                else {
                    nextPercentage = 34
                    percentage = 0
                    return
                }
            }
        })
    }
})


export default function Slider(props) {

    const photosArray = ["slider-1", "slider-2", "slider-3", "slider-4", "slider-5"]
    const displayPhoto = photosArray.map(el => <img className="sliderImage" key={`${el}`} src={`./Photos/${el}.jpg`} alt="sliderElement" draggable="false"></img>)
    return (
        <div className="slider">
            {displayPhoto}
        </div>
    )

}

