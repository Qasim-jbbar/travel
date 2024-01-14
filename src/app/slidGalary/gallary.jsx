"use client"
import style from"@/app/slidGalary/gallary.module.css";
import img from 'next/image';
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"


const AdaptiveHeight = (slider) => {
  function updateHeight() {
    slider.container.style.height =
      slider.slides[slider.track.details.rel].offsetHeight + "px"
  }
  slider.on("created", updateHeight)
  slider.on("slideChanged", updateHeight)
}

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [AdaptiveHeight]
  )

  return (
    <div className={style.body}>
      <div className={style.navigation_wrapper}>
        <div ref={sliderRef} className={style.keen_slider}>
          <div className={style.numberslide1}>1</div>
          <div
            className={style.numberslide2}
            style={{ height: 100 }}
          >
            2
          </div>
          <div
            className={style.numberslide3}
            style={{ height: 150 }}
          >
            3
          </div>
          <div className={style.numberslide4}>4</div>
          <div
            className={style.numberslide5}
            style={{ height: 75 }}
          >
            5
          </div>
          <div
            className={style.numberslide6}
            style={{ height: 100 }}
          >
            6
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className={style.dots}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={style+{dot} + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow_disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow_right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

