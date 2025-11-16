"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface ToolkitItem {
    dataId: string;
    imageSrc: string;
    title: string;
    description: string;
    titleHtml?: string;
}

const toolkitItems: ToolkitItem[] = [
    {
        dataId: "4afb392",
        imageSrc: "assets/intelliboost.png",
        title: "IntelliBoost",
        description: "AI keeps your growth in sync with algorithm changes",
    },
    {
        dataId: "dafe580",
        imageSrc: "assets/24-7-support.png",
        title: "24/7 Support",
        description: "Expert help available whenever you need it",
    },
    {
        dataId: "3a536e3",
        imageSrc: "assets/affordable.png",
        title: "Affordable",
        description: "Competitive pricing for every channel size",
    },
    {
        dataId: "658bbc5",
        imageSrc: "assets/bank-level-security.png",
        title: "Bank Level Security",
        description: "Your data stays private with military-grade protection",
    },
    {
        dataId: "77f60c0",
        imageSrc: "assets/AI-powered-optimization.png",
        title: "AI-Powered Optimization",
        description: "Smart targeting adapts to what works best",
    },
    {
        dataId: "c697957",
        imageSrc: "assets/youtube-compliant.png",
        title: "YouTube™ Compliant",
        description: "Growth strategies that follow all platform rules",
        titleHtml: "YouTube™  <br /> Compliant",
    },
    {
        dataId: "0125a77",
        imageSrc: "assets/set-it-and-forget-it.png",
        title: "Set It & Forget It",
        description: "Start growing while you focus on content",
    },
    {
        dataId: "d49729b",
        imageSrc: "assets/1-on-1-consulting.png",
        title: "1-0n-1 Consulting",
        description: "Personal strategy from your dedicated channel manager",
    },
];

export default function GrowsToolkitSection() {
    const [toolkitImageRef, isToolkitInView] = useInViewAnimation({ triggerOnce: true });

    const topRowItems = toolkitItems.slice(0, 4);
    const bottomRowItems = toolkitItems.slice(4);

    return (
        <div className="elementor-element elementor-element-8ee30e2 e-flex e-con-boxed e-con" data-id="8ee30e2" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;content_width&quot;:&quot;boxed&quot;}">
            <div className="e-con-inner">
                <div className="elementor-element elementor-element-60c71f6 elementor-widget elementor-widget-heading" data-id="60c71f6" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Your Complete Growth Toolkit</h2>
                    </div>
                </div>
                <div className="elementor-element elementor-element-5e5c827 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="5e5c827" data-element_type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                        <p className="has-white-color">Growing a YouTube™ channel requires more than just great content. We&apos;ve built a complete system that handles the heavy lifting behind subscriber growth for you.</p>
                    </div>
                </div>
                <div className="elementor-element elementor-element-e47a2ec e-con-full e-flex e-con" data-id="e47a2ec" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                    <div className="elementor-element elementor-element-fe6feb9 e-con-full e-flex e-con" data-id="fe6feb9" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                        {topRowItems.map((item) => (
                            <div key={item.dataId} className={`elementor-element elementor-element-${item.dataId} elementor-widget__width-initial elementor-position-top elementor-widget elementor-widget-image-box`} data-id={item.dataId} data-element_type="widget" data-widget_type="image-box.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-image-box-wrapper">
                                        <figure className="elementor-image-box-img">
                                            <img decoding="async" width="56" height="56" src={item.imageSrc} className="attachment-full inline-block entered lazyloaded" alt="" />
                                        </figure>
                                        <div className="elementor-image-box-content">
                                            {item.titleHtml ? (
                                                <h3 className="elementor-image-box-title" dangerouslySetInnerHTML={{ __html: item.titleHtml }} />
                                            ) : (
                                                <h3 className="elementor-image-box-title">{item.title}</h3>
                                            )}
                                            <p className="elementor-image-box-description">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="elementor-element elementor-element-4bc518f e-con-full e-flex e-con" data-id="4bc518f" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                        <div className="elementor-element elementor-element-d76e606 elementor-widget__width-initial elementor-widget elementor-widget-image" data-id="d76e606" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                                <img
                                    ref={toolkitImageRef as React.RefObject<HTMLImageElement>}
                                    decoding="async"
                                    width="406"
                                    height="822"
                                    src="assets/tk-img14.png"
                                    className={`elementor-animation-bob attachment-large size-large wp-image-1819330 entered lazyloaded ${isToolkitInView ? "bob-in-view" : ""}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-3271083 e-con-full e-flex e-con" data-id="3271083" data-element_type="container" data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                        {bottomRowItems.map((item) => (
                            <div key={item.dataId} className={`elementor-element elementor-element-${item.dataId} elementor-widget__width-initial elementor-position-top elementor-widget elementor-widget-image-box`} data-id={item.dataId} data-element_type="widget" data-widget_type="image-box.default">
                                <div className="elementor-widget-container">
                                    <div className="elementor-image-box-wrapper">
                                        <figure className="elementor-image-box-img">
                                            <img decoding="async" width="56" height="56" src={item.imageSrc} className="attachment-full inline-block entered lazyloaded" alt="" />
                                        </figure>
                                        <div className="elementor-image-box-content">
                                            {item.titleHtml ? (
                                                <h3 className="elementor-image-box-title" dangerouslySetInnerHTML={{ __html: item.titleHtml }} />
                                            ) : (
                                                <h3 className="elementor-image-box-title">{item.title}</h3>
                                            )}
                                            <p className="elementor-image-box-description">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}