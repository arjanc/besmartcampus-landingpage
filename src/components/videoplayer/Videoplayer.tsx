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
}

export function Videoplayer({ sources, thumbnailUrl, className, caption }: VideoPlayerProps) {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <div className={twMerge("text-lichtblauw w-full", className)}>
            <div className="relative aspect-video rounded-xl overflow-hidden mb-2">
                {!showVideo ? (
                    <Image src={thumbnailUrl} alt="BeSmart Campus" className="object-contain w-full" width={523} height={296} onClick={() => setShowVideo(true)} />
                ): (
                    <video className="w-full h-full object-cover rounded-lg" controls autoPlay>
                        {sources.map((source, index) => (
                            <source key={index} src={source.src} type={source.type ? source.type : 'video/mp4'} media={source.media} />
                        ))}
                        Your browser does not support the video tag.
                    </video>
                )}
                
            </div>
            {caption && <span className="px-2"><FontAwesomeIcon icon={faPlay} /> {caption}</span>}
        </div>
    );
}