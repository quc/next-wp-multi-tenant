"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useInViewAnimation(
    options: UseInViewAnimationOptions = {}
): [React.RefObject<HTMLElement>, boolean] {
    const {
        threshold = 0.1,
        rootMargin = "0px",
        triggerOnce = false,
    } = options;

    const elementRef = useRef<HTMLElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        if (triggerOnce) {
                            observer.disconnect();
                        }
                    } else if (!triggerOnce) {
                        setIsInView(false);
                    }
                });
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [elementRef, isInView];
}

