"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import VideoPlayer from "./VideoPlayer";

interface Testimonial {
    text: string;
    author: string;
    imageUrl?: string;
}

const testimonials: Testimonial[] = [
    {
        text: "Other growth providers haven't shown such a commitment to their clients. Since TubeKarma began to handle my account, I've added almost 15k real and authentic subscribers",
        author: "Florence",
    },
    {
        text: "Recommended for everyone who wants to boost their YouTube channel's subscriber count with 100% real subscribers. Received kind assistance from the team.",
        author: "Donald M",
    },
    {
        text: "They gave me regular updates and offered such fantastic service that the results were mind-blowing. Highly recommend!",
        author: "Jason R",
    },
    {
        text: "Tubekarma helped me to gain so many subscribers on my youtube channel as now I can definitely interact with many new people who are interested in my content through my channel. Thanks tubekarma for all the help with channel growth",
        author: "Donald",
        imageUrl: "assets/testi.png",
    },
];

export default function FasterGrowSection() {
    const prevButtonRef = useRef<HTMLDivElement>(null);
    const nextButtonRef = useRef<HTMLDivElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div
            className="elementor-element elementor-element-c3fb347 e-flex e-con-boxed e-con"
            data-id="c3fb347"
            data-element_type="container"
            id="reviews"
            data-settings='{"background_background":"gradient","content_width":"boxed"}'
        >
            <div className="e-con-inner">
                <div
                    className="elementor-element elementor-element-8cb6319 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                    data-id="8cb6319"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                >
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                            Faster Growth Than They Ever Believed Was Possible
                        </h2>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-412f5f2 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                    data-id="412f5f2"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                >
                    <div className="elementor-widget-container">
                        <p className="has-white-color">Check out these testimonials from TubeKarma clients.</p>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-5cfebc6 e-flex e-con-boxed e-con"
                    data-id="5cfebc6"
                    data-element_type="container"
                    data-settings='{"content_width":"boxed"}'
                >
                    <div className="e-con-inner">
                        <div
                            className="elementor-element elementor-element-d44eded elementor-widget elementor-widget-html"
                            data-id="d44eded"
                            data-element_type="widget"
                            data-widget_type="html.default"
                        >
                            <div className="elementor-widget-container">
                                <VideoPlayer
                                    iframeUrl="https://player.vimeo.com/video/904484711?muted=1&autoplay=1&autopause=0&loop=1&background=1&app_id=122963&texttrack=false"
                                    videoId={1}
                                    vimeoId={904484711}
                                    title="Y2Mate.is - Tubekarma Testimonials-mPK-E9PoTUE-1080p-1654384692515"
                                />
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-c9227f9 elementor-widget elementor-widget-text-editor"
                            data-id="c9227f9"
                            data-element_type="widget"
                            data-widget_type="text-editor.default"
                        >
                            <div className="elementor-widget-container">
                                <p className="has-white-color">Trusted by over 2.4k YouTube creators</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-1ffe2bf elementor-testimonial--align-left elementor-testimonial--skin-default elementor-testimonial--layout-image_inline elementor-arrows-yes elementor-pagination-type-bullets elementor-widget elementor-widget-testimonial-carousel e-widget-swiper"
                    data-id="1ffe2bf"
                    data-element_type="widget"
                    data-settings='{"slides_per_view":"3","slides_to_scroll":"1","autoplay_speed":7000,"space_between":{"unit":"px","size":40,"sizes":[]},"slides_per_view_tablet":"2","slides_per_view_mobile":"1","show_arrows":"yes","pagination":"bullets","speed":500,"autoplay":"yes","loop":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","space_between_tablet":{"unit":"px","size":10,"sizes":[]},"space_between_mobile":{"unit":"px","size":10,"sizes":[]}}'
                    data-widget_type="testimonial-carousel.default"
                >
                    <div className="elementor-widget-container">
                        <div className="elementor-swiper">
                            <Swiper
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                onAfterInit={(swiper) => {
                                    if (prevButtonRef.current && nextButtonRef.current) {
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    }
                                }}
                                modules={[Autoplay, Navigation, Pagination]}
                                spaceBetween={40}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{
                                    delay: 7000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed={500}
                                navigation={{
                                    prevEl: prevButtonRef.current || undefined,
                                    nextEl: nextButtonRef.current || undefined,
                                }}
                                pagination={{
                                    clickable: true,
                                    bulletClass: "swiper-pagination-bullet",
                                    bulletActiveClass: "swiper-pagination-bullet-active",
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                                className="elementor-main-swiper"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="elementor-testimonial">
                                            <div className="elementor-testimonial__content">
                                                <div className="elementor-testimonial__text">
                                                    &quot;{testimonial.text}&quot;
                                                </div>
                                            </div>
                                            <div className="elementor-testimonial__footer">
                                                {testimonial.imageUrl && (
                                                    <div className="elementor-testimonial__image">
                                                        <img
                                                            width={365}
                                                            height={273}
                                                            decoding="async"
                                                            src={testimonial.imageUrl}
                                                            alt={testimonial.author}
                                                        />
                                                    </div>
                                                )}
                                                <cite className="elementor-testimonial__cite">
                                                    <span className="elementor-testimonial__title">
                                                        {testimonial.author}
                                                    </span>
                                                </cite>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div
                                ref={prevButtonRef}
                                className="elementor-swiper-button elementor-swiper-button-prev"
                                role="button"
                                tabIndex={0}
                                aria-label="Previous slide"
                            >
                                <i
                                    aria-hidden="true"
                                    className="eicon-chevron-left"
                                />
                                <span className="elementor-screen-only">
                                    Previous
                                </span>
                            </div>
                            <div
                                ref={nextButtonRef}
                                className="elementor-swiper-button elementor-swiper-button-next"
                                role="button"
                                tabIndex={0}
                                aria-label="Next slide"
                            >
                                <i
                                    aria-hidden="true"
                                    className="eicon-chevron-right"
                                />
                                <span className="elementor-screen-only">Next</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}