"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
export default function carousel({ imgsrc }) {
  var settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1, 
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 647,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider className="slider slider-container" {...settings}>
        {imgsrc &&
          imgsrc.map((item, index) => {
            return (
              <div key={index}>
                <Image src={item} alt="Some Image" width={100} height={100} />
              </div>
            );
          })}
      </Slider>
    </>
  );
}
