"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface TrustedByLogo {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const trustedByLogos: TrustedByLogo[] = [
    { src: "assets/trusted/tech-crunch.png", alt: "tech-crunch", width: 242, height: 48 },
    { src: "assets/trusted/time.png", alt: "time", width: 241, height: 48 },
    { src: "assets/trusted/usa-today.png", alt: "usa-today", width: 242, height: 48 },
    { src: "assets/trusted/vanity-fair.png", alt: "vanity-fair", width: 240, height: 48 },
    { src: "assets/trusted/wired.png", alt: "wired", width: 242, height: 48 },
    { src: "assets/trusted/buzzfeed.png", alt: "buzzfeed", width: 241, height: 48 },
    { src: "assets/trusted/IBM-watson.png", alt: "IBM-watson", width: 242, height: 48 },
];

export default function TrustedBySection() {
    return (
        <div
            className="elementor-element elementor-element-ae57a75 e-con-full e-flex e-con"
            data-id="ae57a75"
            data-element_type="container"
            data-settings='{"content_width":"full"}'
        >
            <div
                className="elementor-element elementor-element-e983225 elementor-widget elementor-widget-heading"
                data-id="e983225"
                data-element_type="widget"
                data-widget_type="heading.default"
            >
                <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">
                        As Featured In...
                    </h6>
                </div>
            </div>
            <div
                className="elementor-element elementor-element-6224f11 elementor-widget elementor-widget-image-carousel e-widget-swiper"
                data-id="6224f11"
                data-element_type="widget"
                data-settings='{"slides_to_show":"6","slides_to_scroll":"1","navigation":"none","autoplay_speed":0,"speed":4000,"image_spacing_custom":{"unit":"px","size":30,"sizes":[]},"slides_to_show_tablet":"4","slides_to_show_mobile":"2","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","infinite":"yes","image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}'
                data-widget_type="image-carousel.default"
                aria-roledescription="carousel"
                aria-label="Carousel | Horizontal scrolling: Arrow Left & Right"
            >
                <div className="elementor-widget-container">
                    <div className="elementor-image-carousel-wrapper">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={6}
                            loop={true}
                            loopAdditionalSlides={10}
                            allowSlidePrev={true}
                            allowSlideNext={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                                reverseDirection: false,
                            }}
                            speed={4000}
                            breakpoints={{
                                768: {
                                    slidesPerView: 4,
                                },
                                320: {
                                    slidesPerView: 2,
                                },
                            }}
                            className="elementor-image-carousel"
                        >
                            {trustedByLogos.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <figure className="swiper-slide-inner">
                                        <img
                                            width={logo.width}
                                            height={logo.height}
                                            decoding="async"
                                            className="swiper-slide-image"
                                            src={logo.src}
                                            alt={logo.alt}
                                        />
                                    </figure>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}