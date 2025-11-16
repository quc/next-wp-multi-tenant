"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface TestimonialItem {
    text: string;
    iconUrl: string;
    iconWidth: number;
    iconHeight: number;
}

const testimonials: TestimonialItem[] = [
    {
        text: "30-Day Money-Back Guarantee",
        iconUrl: "assets/icon-5.png",
        iconWidth: 20,
        iconHeight: 21,
    },
    {
        text: "Cancel Anytime",
        iconUrl: "assets/icon-6.png",
        iconWidth: 21,
        iconHeight: 21,
    },
    {
        text: "100% Organic Growth",
        iconUrl: "assets/icon-7.png",
        iconWidth: 21,
        iconHeight: 21,
    },
    {
        text: "24/7 Support",
        iconUrl: "assets/icon-8.png",
        iconWidth: 20,
        iconHeight: 21,
    },
];

export default function TestimonialLineSection() {
    return (
        <div
            className="elementor-element elementor-element-3342524 e-con-full e-flex e-con"
            data-id={3342524}
            data-element_type="container"
            data-settings='{"content_width":"full","background_background":"classic"}'
        >
            <div
                className="elementor-element elementor-element-8507c12 elementor-testimonial--layout-image_left elementor-testimonial--skin-default elementor-testimonial--align-center elementor-widget elementor-widget-testimonial-carousel e-widget-swiper"
                data-id="8507c12"
                data-element_type="widget"
                data-settings='{"slides_per_view":"4","slides_to_scroll":"1","autoplay_speed":0,"speed":6000,"slides_per_view_tablet":"2","slides_per_view_mobile":"1","slides_to_scroll_tablet":"1","autoplay":"yes","loop":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","space_between":{"unit":"px","size":10,"sizes":[]},"space_between_tablet":{"unit":"px","size":10,"sizes":[]},"space_between_mobile":{"unit":"px","size":10,"sizes":[]}}'
                data-widget_type="testimonial-carousel.default"
            >
                <div className="elementor-widget-container">
                    <div className="elementor-swiper">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={10}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            speed={6000}
                            breakpoints={{
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                320: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                            }}
                            className="elementor-main-swiper"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="elementor-testimonial flex">
                                        <div className="elementor-testimonial__footer">
                                            <div className="elementor-testimonial__image">
                                                <img
                                                    width={testimonial.iconWidth}
                                                    height={testimonial.iconHeight}
                                                    decoding="async"
                                                    src={testimonial.iconUrl}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="elementor-testimonial__content">
                                            <div className="elementor-testimonial__text">
                                                {testimonial.text}{" "}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}