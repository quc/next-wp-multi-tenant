"use client";

import { useEffect, useRef, useState } from "react";

interface CounterData {
    targetValue: number;
    duration: number;
    suffix: string;
}

function useAnimatedCounter(
    targetValue: number,
    duration: number,
    isVisible: boolean
): number {
    const [currentValue, setCurrentValue] = useState(0);
    const animationFrameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        if (!isVisible) {
            setCurrentValue(0);
            return;
        }

        const startAnimation = (timestamp: number) => {
            if (startTimeRef.current === null) {
                startTimeRef.current = timestamp;
            }

            const elapsed = timestamp - startTimeRef.current;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const newValue = targetValue * easeOutQuart;

            setCurrentValue(newValue);

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(startAnimation);
            } else {
                setCurrentValue(targetValue);
                startTimeRef.current = null;
            }
        };

        animationFrameRef.current = requestAnimationFrame(startAnimation);

        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            startTimeRef.current = null;
        };
    }, [targetValue, duration, isVisible]);

    return currentValue;
}

function AnimatedCounter({ targetValue, duration, suffix }: CounterData) {
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLSpanElement>(null);
    const animatedValue = useAnimatedCounter(targetValue, duration, isVisible);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const formatValue = (value: number): string => {
        if (targetValue % 1 !== 0) {
            return value.toFixed(1);
        }
        return Math.floor(value).toString();
    };

    return (
        <>
            <span className="elementor-counter-number-prefix" />
            <span
                ref={counterRef}
                className="elementor-counter-number"
                data-duration={duration}
                data-to-value={targetValue}
                data-from-value={0}
                data-delimiter=","
            >
                {formatValue(animatedValue)}
            </span>
            <span className="elementor-counter-number-suffix">{suffix}</span>
        </>
    );
}

export default function NumbersSection() {
    return (
        <div
            className="elementor-element elementor-element-7332aef e-flex e-con-boxed e-con"
            data-id="7332aef"
            data-element_type="container"
            data-settings='{"background_background":"gradient","content_width":"boxed"}'
        >
            <div className="e-con-inner">
                <div
                    className="elementor-element elementor-element-1370eb5 elementor-widget elementor-widget-heading"
                    data-id="1370eb5"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                >
                    <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                            Our Numbers Speak Volumes
                        </h2>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-cd0f503 elementor-widget elementor-widget-text-editor"
                    data-id="cd0f503"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                >
                    <div className="elementor-widget-container">
                        <p className="has-white-color">
                            We&apos;re masters of YouTube™ growth, and we&apos;ve got the stats
                            to prove it.
                        </p>
                    </div>
                </div>
                <div
                    className="elementor-element elementor-element-649f040 e-con-full e-flex e-con"
                    data-id="649f040"
                    data-element_type="container"
                    data-settings='{"content_width":"full"}'
                >
                    <div
                        className="elementor-element elementor-element-8d96ea2 e-flex e-con-boxed e-con"
                        data-id="8d96ea2"
                        data-element_type="container"
                        data-settings='{"content_width":"boxed"}'
                    >
                        <div className="e-con-inner">
                            <div
                                className="elementor-element elementor-element-eb84354 elementor-widget elementor-widget-counter"
                                data-id="eb84354"
                                data-element_type="widget"
                                data-widget_type="counter.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-counter">
                                        <div className="elementor-counter-number-wrapper">
                                            <AnimatedCounter
                                                targetValue={7.5}
                                                duration={1500}
                                                suffix="k"
                                            />
                                        </div>
                                        <div className="elementor-counter-title">
                                            Clients
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-33e72a1 e-flex e-con-boxed e-con"
                        data-id="33e72a1"
                        data-element_type="container"
                        data-settings='{"content_width":"boxed"}'
                    >
                        <div className="e-con-inner">
                            <div
                                className="elementor-element elementor-element-283109e elementor-widget elementor-widget-counter"
                                data-id="283109e"
                                data-element_type="widget"
                                data-widget_type="counter.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-counter">
                                        <div className="elementor-counter-number-wrapper">
                                            <AnimatedCounter
                                                targetValue={56}
                                                duration={1500}
                                                suffix=" Million+"
                                            />
                                        </div>
                                        <div className="elementor-counter-title">
                                            Likes Gained
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="elementor-element elementor-element-2e1a052 e-flex e-con-boxed e-con"
                        data-id="2e1a052"
                        data-element_type="container"
                        data-settings='{"content_width":"boxed"}'
                    >
                        <div className="e-con-inner">
                            <div
                                className="elementor-element elementor-element-8549522 elementor-widget elementor-widget-counter"
                                data-id={8549522}
                                data-element_type="widget"
                                data-widget_type="counter.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-counter">
                                        <div className="elementor-counter-number-wrapper">
                                            <AnimatedCounter
                                                targetValue={45}
                                                duration={1500}
                                                suffix=""
                                            />
                                        </div>
                                        <div className="elementor-counter-title">
                                            Market Niche
                                        </div>
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