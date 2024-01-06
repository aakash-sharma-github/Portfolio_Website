import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxCamera,
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCamera />,
    title: "Photography",
    description:
      "Capturing moments that transcend time, my photography services aim to tell your unique story through a lens. "
  },
  {
    icon: <RxPencil2 />,
    title: "Front End Development",
    description:
      "Crafting digital experiences, responsive layouts to interactive interfaces, transforming ideas into visually appealing website."
  },
  {
    icon: <RxDesktop />,
    title: "Back End Development",
    description:
      "Architecting robust and scalable server-side solutions that power the core functionality of your applications."
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Elevating your online presence, Through strategic keyword research, content optimization, and technical SEO enhancements."
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              {/* icon */}
              <div className="text-2xl text-accent mb-2">{item.icon}</div>
              {/* title & description */}
              <div className="mb-8">
                <div className="mb-1 text-lg">{item.title}</div>
                <p className="max-w-[380px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow  */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
