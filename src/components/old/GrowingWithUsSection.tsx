"use client";

import VideoPlayer from "./VideoPlayer";

export default function GrowingWithUsSection() {

    return (
        <div
            className="elementor-element elementor-element-b6e05c4 e-flex e-con-boxed e-con"
            data-id="b6e05c4"
            data-element_type="container"
            data-settings='{"content_width":"boxed"}'
        >
            <div className="e-con-inner">
                <div
                    className="elementor-element elementor-element-6c62d56 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                    data-id="6c62d56"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                >
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                            Growing A YouTube™ Audience Is Tough…
                        </h2>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-3e99272 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                    data-id="3e99272"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                >
                    <div className="elementor-widget-container">
                        <p className="has-white-color">
                            But not when you partner with TubeKarma. We&apos;ve built a
                            uniquely effective way to turbocharge your channel&apos;s
                            growth. Watch to find out how we do it.
                        </p>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-6557ed6 elementor-widget elementor-widget-html"
                    data-id="6557ed6"
                    data-element_type="widget"
                    data-widget_type="html.default"
                >
                    <div className="elementor-widget-container">
                        <VideoPlayer
                            iframeUrl="https://player.vimeo.com/video/1036030284?muted=1&autoplay=1&autopause=0&loop=1&background=1&app_id=122963&texttrack=false"
                            videoId={0}
                            vimeoId={1036030284}
                            title="Video 1_ Landing Page Explainer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}