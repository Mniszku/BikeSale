import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import MediaCard from "../MediaCard/MediaCard";
import Gorski from "../Gorski/rower gorski.jpg";
import Szosowy from "../Szosowy/rower szosowy.jpg";
const createSlide = () => {
  return (
    <>
      <SwiperSlide>
        <MediaCard backgroundImage={Gorski}></MediaCard>
      </SwiperSlide>
      <SwiperSlide>
        <MediaCard backgroundImage={Szosowy}></MediaCard>
      </SwiperSlide>
    </>
  );
};

const AutoPlay = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
    >
      {createSlide()}
    </Swiper>
  );
};

export default AutoPlay;
