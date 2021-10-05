import React, {useRef, useEffect, useState} from 'react'
import classes from './Slider.module.css'

function Slider({slides, slidesToShow = 4, theme}) {
    const slideRef = useRef(null);
    const slider = useRef(null);

    const [offset, setOffset] = useState(0);
    const [slideMargin, setSlideMargin] = useState(0);

    useEffect(() => {
        const emptySpace = slider.current.offsetWidth - slideRef.current.offsetWidth * slidesToShow;
        const newSlideMargin = emptySpace / (slidesToShow * 2);

        setOffset(slideRef.current.offsetWidth + newSlideMargin);
        setSlideMargin(newSlideMargin);
    }, [])

    const scrollRight = () => {
        slider.current.scrollLeft = slider.current.scrollLeft + offset + slideMargin;
    }

    const scrollLeft = () => {
        slider.current.scrollLeft = slider.current.scrollLeft - offset - slideMargin;
    }

    return (
        <div className={classes.container}>
            <div className={classes.leftArrow} onClick={scrollLeft}>
                {/* <img src={leftArrow} onClick={scrollLeft} alt="arrow-left"></img> */}
            </div>
            <div  id="slider" ref={slider} className={classes.slides}>
                {
                    slides.map((slide) => {
                        return(
                            //what to pass as a key
                            <div ref={slideRef} style={{marginLeft: slideMargin, marginRight: slideMargin}}>
                                { slide }
                            </div>
                        )
                    })
                }
            </div>
            <div className={classes.rightArrow} onClick={scrollRight}>
                {/* <img src={rightArrow} onClick={scrollRight} alt="arrow-right" ></img> */}
            </div>
        </div>
    )
}

export default Slider
