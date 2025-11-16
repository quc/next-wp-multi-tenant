"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function StepsSection() {
    const [firstImageRef, isFirstInView] = useInViewAnimation({ triggerOnce: true });
    const [secondImageRef, isSecondInView] = useInViewAnimation({ triggerOnce: true });
    const [thirdImageRef, isThirdInView] = useInViewAnimation({ triggerOnce: true });

    return (
        <div
            className="elementor-element elementor-element-00694b2 e-flex e-con-boxed e-con"
            data-id="00694b2"
            data-element_type="container"
            id="howitworks"
            data-settings='{"background_background":"classic","content_width":"boxed"}'
        >
            <div className="e-con-inner">
                <div
                    className="elementor-element elementor-element-2b15ba1 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                    data-id="2b15ba1"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                >
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                            3 Simple Steps To Easy Growth
                        </h2>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-5964c36 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                    data-id="5964c36"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                >
                    <div className="elementor-widget-container">
                        <p>We do all the hard work, so you don’t have to.</p>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-3115c88 e-con-full e-flex e-con"
                    data-id="3115c88"
                    data-element_type="container"
                    data-settings='{"content_width":"full"}'
                >
                    <div
                        className="elementor-element elementor-element-f889903 e-flex e-con-boxed e-con"
                        data-id="f889903"
                        data-element_type="container"
                        data-settings='{"content_width":"boxed"}'
                    >
                        <div className="e-con-inner">
                            <div
                                className="elementor-element elementor-element-2b4addd e-flex e-con-boxed e-con"
                                data-id="2b4addd"
                                data-element_type="container"
                                data-settings='{"background_background":"gradient","content_width":"boxed"}'
                            >
                                <div className="e-con-inner">
                                    <div
                                        className="elementor-element elementor-element-6f623f3 elementor-widget elementor-widget-image"
                                        data-id="6f623f3"
                                        data-element_type="widget"
                                        data-widget_type="image.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <img
                                                ref={firstImageRef as React.RefObject<HTMLImageElement>}
                                                decoding="async"
                                                width={320}
                                                height={226}
                                                src="assets/pick-your-audience.png"
                                                className={`elementor-animation-bob attachment-full wp-image-1785823 ${isFirstInView ? "bob-in-view" : ""}`}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-905bff0 e-flex e-con-boxed e-con"
                                data-id="905bff0"
                                data-element_type="container"
                                data-settings='{"background_background":"classic","content_width":"boxed"}'
                            >
                                <div className="e-con-inner">
                                    <div
                                        className="elementor-element elementor-element-2ddcd47 elementor-position-top elementor-widget elementor-widget-image-box"
                                        data-id="2ddcd47"
                                        data-element_type="widget"
                                        data-widget_type="image-box.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                    <img
                                                        decoding="async"
                                                        width={70}
                                                        height={70}
                                                        src="assets/num-1.png"
                                                        className="attachment-full inline-block wp-image-1785831"
                                                        alt=""
                                                    />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                    <h3 className="elementor-image-box-title">
                                                        Pick Your Perfect Audience
                                                    </h3>
                                                    <p className="elementor-image-box-description">
                                                        Tell us who you want watching your videos.
                                                        Our team pinpoints viewers who match your
                                                        content perfectly - people who&apos;ll hit
                                                        subscribe and keep coming back.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-a9b4ed5 e-flex e-con-boxed e-con"
                        data-id="a9b4ed5"
                        data-element_type="container"
                        data-settings='{"content_width":"boxed"}'
                    >
                        <div className="e-con-inner">
                            <div
                                className="elementor-element elementor-element-f70c971 e-flex e-con-boxed e-con"
                                data-id="f70c971"
                                data-element_type="container"
                                data-settings='{"background_background":"gradient","content_width":"boxed"}'
                            >
                                <div className="e-con-inner">
                                    <div
                                        className="elementor-element elementor-element-7d17bcf elementor-widget elementor-widget-image"
                                        data-id="7d17bcf"
                                        data-element_type="widget"
                                        data-widget_type="image.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <img
                                                ref={secondImageRef as React.RefObject<HTMLImageElement>}
                                                decoding="async"
                                                width={320}
                                                height={242}
                                                src="assets/smart-social-outreach.png"
                                                className={`elementor-animation-bob attachment-full wp-image-1785824 ${isSecondInView ? "bob-in-view" : ""}`}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-fb293c9 e-flex e-con-boxed e-con"
                                data-id="fb293c9"
                                data-element_type="container"
                                data-settings='{"background_background":"classic","content_width":"boxed"}'
                            >
                                <div className="e-con-inner">
                                    <div
                                        className="elementor-element elementor-element-0846445 elementor-position-top elementor-widget elementor-widget-image-box"
                                        data-id="0846445"
                                        data-element_type="widget"
                                        data-widget_type="image-box.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                    <img
                                                        decoding="async"
                                                        width={70}
                                                        height={70}
                                                        src="assets/num-2.png"
                                                        className="attachment-full inline-block wp-image-1785830"
                                                        alt=""
                                                    />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                    <h3 className="elementor-image-box-title">
                                                        Smart Social Outreach
                                                    </h3>
                                                    <p className="elementor-image-box-description">
                                                        We create 40-200 social accounts (based on
                                                        your package) to connect with your ideal
                                                        viewers. When we spot someone who loves
                                                        content like yours, we let them know about
                                                        your channel.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-fd6b841 e-flex e-con-boxed e-con"
                        data-id="fd6b841"
                        data-element_type="container"
                        data-settings='{"content_width":"boxed"}'
                    >
                        <div className="e-con-inner">
                            <div
                                className="elementor-element elementor-element-ccd0299 e-flex e-con-boxed e-con"
                                data-id="ccd0299"
                                data-element_type="container"
                                data-settings='{"background_background":"gradient","content_width":"boxed"}'
                            >
                                <div className="e-con-inner">
                                    <div
                                        className="elementor-element elementor-element-a1647a1 elementor-widget elementor-widget-image"
                                        data-id="a1647a1"
                                        data-element_type="widget"
                                        data-widget_type="image.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <img
                                                ref={thirdImageRef as React.RefObject<HTMLImageElement>}
                                                decoding="async"
                                                width={320}
                                                height={214}
                                                src="assets/watch-your-channel-grow.png"
                                                className={`elementor-animation-bob attachment-full wp-image-1785825 ${isThirdInView ? "bob-in-view" : ""}`}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-c904a2e e-flex e-con-boxed e-con"
                                data-id="c904a2e"
                                data-element_type="container"
                                data-settings='{"background_background":"classic","content_width":"boxed"}'
                            >
                                <div className="e-con-inner">
                                    <div
                                        className="elementor-element elementor-element-1d2af92 elementor-position-top elementor-widget elementor-widget-image-box"
                                        data-id="1d2af92"
                                        data-element_type="widget"
                                        data-widget_type="image-box.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <div className="elementor-image-box-wrapper">
                                                <figure className="elementor-image-box-img">
                                                    <img
                                                        decoding="async"
                                                        width={70}
                                                        height={70}
                                                        src="assets/num-3.png"
                                                        className="attachment-full inline-block wp-image-1785829"
                                                        alt=""
                                                    />
                                                </figure>
                                                <div className="elementor-image-box-content">
                                                    <h3 className="elementor-image-box-title">
                                                        Watch Your Channel Grow
                                                    </h3>
                                                    <p className="elementor-image-box-description">
                                                        Just share your channel link, and we handle
                                                        the rest. No passwords needed, no
                                                        complicated setup. Your subscribers grow
                                                        naturally while you focus on making great
                                                        videos.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-7bbec77 e-flex e-con-boxed e-con"
                    data-id="7bbec77"
                    data-element_type="container"
                    data-settings='{"content_width":"boxed"}'
                >
                    <div className="e-con-inner">
                        <div
                            className="elementor-element elementor-element-a3c43c0 elementor-align-justify elementor-widget__width-initial elementor-widget elementor-widget-button"
                            data-id="a3c43c0"
                            data-element_type="widget"
                            data-widget_type="button.default"
                        >
                            <div className="elementor-widget-container">
                                <div className="elementor-button-wrapper">
                                    <a
                                        className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                                        href="#pricing"
                                    >
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">
                                                Start My 3 Day Free Trial
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="elementor-element elementor-element-ee70105 e-flex e-con-boxed e-con"
                            data-id="ee70105"
                            data-element_type="container"
                            data-settings='{"content_width":"boxed"}'
                        >
                            <div className="e-con-inner">
                                <div
                                    className="elementor-element elementor-element-449c906 elementor-widget elementor-widget-text-editor"
                                    data-id="449c906"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                >
                                    <div className="elementor-widget-container">
                                        <p>5/5</p>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-a199cce elementor--star-style-star_unicode elementor-widget elementor-widget-star-rating"
                                    data-id="a199cce"
                                    data-element_type="widget"
                                    data-widget_type="star-rating.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="elementor-star-rating__wrapper">
                                            <div
                                                className="elementor-star-rating"
                                                title="5/5"
                                                itemType="http://schema.org/Rating"
                                                itemScope={true}
                                                itemProp="reviewRating"
                                            >
                                                <i className="elementor-star-full">★</i>
                                                <i className="elementor-star-full">★</i>
                                                <i className="elementor-star-full">★</i>
                                                <i className="elementor-star-full">★</i>
                                                <i className="elementor-star-full">★</i>{" "}
                                                <span
                                                    itemProp="ratingValue"
                                                    className="elementor-screen-only"
                                                >
                                                    5/5
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-ae1b7eb elementor-widget elementor-widget-text-editor"
                                    data-id="ae1b7eb"
                                    data-element_type="widget"
                                    data-widget_type="text-editor.default"
                                >
                                    <div className="elementor-widget-container">
                                        <p>
                                            by <strong>2478+</strong> Happy TubeKarma Clients
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}