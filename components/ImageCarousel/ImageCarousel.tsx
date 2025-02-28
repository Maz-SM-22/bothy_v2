"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./imageCarousel.module.css"

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[542px] md:h-80">
            <Image
                src={`/images/${src}`}
                alt={`Slide ${index}`}
                width={942}
                height={700}
                style={{ objectFit: "contain" }}
                className={styles.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
