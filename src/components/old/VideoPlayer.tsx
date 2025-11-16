"use client";

import { useState, useRef } from "react";

interface VideoPlayerProps {
    iframeUrl: string;
    playButtonImagePath?: string;
    unmuteIconImagePath?: string;
    videoId?: number;
    vimeoId?: number;
    title?: string;
}

export default function VideoPlayer({
    iframeUrl,
    videoId = 0,
    vimeoId = 0,
    title = "Video Player"
}: VideoPlayerProps) {
    const [isMuted, setIsMuted] = useState(true);
    const [showButton, setShowButton] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [hasBeenClicked, setHasBeenClicked] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const unmuteVideo = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsMuted(false);
        setShowButton(false);

        const iframe = iframeRef.current;
        const contentWindow = iframe?.contentWindow;
        if (contentWindow) {
            const message = {
                method: "setVolume",
                value: 1
            };
            contentWindow.postMessage(message, "*");
        }
    };

    const pauseVideo = () => {
        if (isPlaying) {
            setIsPlaying(false);
            setHasBeenClicked(true);

            const iframe = iframeRef.current;
            const contentWindow = iframe?.contentWindow;
            if (contentWindow) {
                const message = {
                    method: "pause"
                };
                contentWindow.postMessage(message, "*");
            }
        }
    };

    const togglePlayPause = () => {
        const newPlayingState = !isPlaying;
        setIsPlaying(newPlayingState);
        setHasBeenClicked(true);

        const iframe = iframeRef.current;
        const contentWindow = iframe?.contentWindow;
        if (contentWindow) {
            const message = {
                method: newPlayingState ? "play" : "pause"
            };
            contentWindow.postMessage(message, "*");
        }
    };

    return (
        <div className="video-wrapper" data-id={videoId}>
            <div
                className="video-loader progress-parent"
                style={{ display: "none" }}
            >
                <div className="lds-spinner">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                Video Loading...
            </div>
            <div
                className="video-overlay red"
                style={{ display: "block", cursor: "pointer" }}
                onClick={pauseVideo}
            >
                {(!isPlaying && hasBeenClicked) && (
                    <div className="video-play-button">
                        <img
                            width={80}
                            height={80}
                            decoding="async"
                            src='/assets/video-play-button.svg'
                            alt="play button"
                            className="no-lazy"
                        />
                        <div className="video-play-button-pulse" />
                    </div>
                )}
                {showButton && (
                    <div 
                        className="video-overlay-button"
                        onClick={unmuteVideo}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            decoding="async"
                            src='/assets/video-unmute-icon.svg'
                            alt="unmute"
                            className="no-lazy inline-block"
                        />
                        <div>Your Video is Playing</div>
                        <div>Click to Unmute</div>
                    </div>
                )}
            </div>
            <div
                className="video-player-wrapper"
                style={{ display: "block", cursor: "pointer" }}
                onClick={togglePlayPause}
            >
                <div
                    className="video-player"
                    data-vimeo-id={vimeoId}
                    data-vimeo-badge={0}
                    data-vimeo-autopause={0}
                    data-vimeo-quality_selector={1}
                    data-vimeo-player_id={0}
                    data-vimeo-app_id={58479}
                    data-vimeo-autoplay={1}
                    data-vimeo-loop={1}
                    data-vimeo-muted={1}
                    data-vimeo-background={1}
                    data-vimeo-texttrack="false"
                    data-vimeo-initialized="true"
                >
                    <iframe
                        ref={iframeRef}
                        src={iframeUrl}
                        width={426}
                        height={240}
                        frameBorder={0}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title={title}
                        data-ready="true"
                    />
                </div>
            </div>
        </div>
    );
}

