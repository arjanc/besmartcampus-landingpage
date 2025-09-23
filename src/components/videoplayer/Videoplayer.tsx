'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';

type videoSource = {
    src: string;
    type?: string;
    media?: string;
  }

interface VideoPlayerProps {
    sources: videoSource[];
    thumbnailUrl: string;
    className?: string;
    caption?: string;
    showPlayButton?: boolean;
}

export function Videoplayer({ sources, thumbnailUrl, className, caption, showPlayButton = false }: VideoPlayerProps) {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <div className={twMerge("text-lichtblauw w-full", className)}>
            <div className="relative aspect-video rounded-xl overflow-hidden mb-2 w-full @container group">
                {!showVideo ? (
                    <>
                        <Image
                            src={thumbnailUrl}
                            alt="BeSmart Campus"
                            className="object-contain w-full h-auto"
                            width={523}
                            height={296}
                            sizes="523px"
                            onClick={() => setShowVideo(true)}
                        />
                        {showPlayButton && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="@xs:scale-90 @sm:scale-100 @md:scale-110 @lg:scale-125 @xl:scale-150">
                                    <div className="relative w-16 h-16 @sm:w-20 @sm:h-20 @md:w-24 @md:h-24 rounded-full bg-quinary hover:bg-quinary-400 transition-all duration-300 cursor-pointer group-hover:scale-110 flex items-center justify-center" onClick={() => setShowVideo(true)}>
                                        <FontAwesomeIcon 
                                            icon={faPlay} 
                                            className="text-white"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                marginLeft: '5%',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                ): (
                    <video className="w-full h-full object-cover rounded-lg" controls autoPlay>
                        {sources.map((source, index) => (
                            <source key={index} src={source.src} type={source.type ? source.type : 'video/mp4'} media={source.media} />
                        ))}
                        Your browser does not support the video tag.
                    </video>
                )}
                
            </div>
            {caption && <div className="px-2 text-sm bg-white/60 rounded-xl py-1"><FontAwesomeIcon icon={faPlay} className="fa-lg inline mr-1" /><span>{caption}</span></div>}
        </div>
    );
}