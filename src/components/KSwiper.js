import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

import SwiperCore, { Pagination } from "swiper";
import { Flex } from "@chakra-ui/layout";

SwiperCore.use([Pagination]);

export function KSwiper() {
  return (
    <>
      <Swiper 
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          900: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>oi</SwiperSlide>
        <Slide text="oi"/>
        <Slide text="oi"/>
        <Slide text="oi"/>
        <Slide text="oi"/>
      </Swiper>
    </>
  );
}

const Slide = ( props ) => <SwiperSlide>{props.text}</SwiperSlide>;
