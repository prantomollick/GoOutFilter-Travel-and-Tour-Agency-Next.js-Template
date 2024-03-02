import "./swiper-image-slide.scss";

import classNames from "classnames";
import Image from "next/image";
import { useRef, useState } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowBtn from "../ui/arrow-btn/arrow-btn";

interface Props {
  images: string[];
  title: string;
}

export const SwiperImageSlide = ({ images, title }: Props) => {
  const [_, setInit] = useState<boolean>(); // Add a state for re-render
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="slide">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        initialSlide={Math.floor(images.length / 2)}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{
          clickable: true,
          el: ".slide-pagination",
          renderBullet(_, className) {
            return `<span class="${classNames(
              "slide-pagination-dot",
              className
            )}"></span>`;
          },
          bulletActiveClass: `slide-pagination-dot-active`
        }}
        onInit={() => setInit(true)}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={title}
              width={300}
              height={300}
              className="slide-img"
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slide-pagination"></div>
      <div className="slide-control">
        <ArrowBtn
          direction="left"
          className="slide-previous-btn"
          ref={prevRef}
        />
        <ArrowBtn direction="right" className="slide-next-btn" ref={nextRef} />
      </div>
    </div>
  );
};
