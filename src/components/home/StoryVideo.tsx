"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/utils";

/**
 * Plays the Ever Safe film inline, in the same frame as its poster.
 * The video only downloads once the visitor chooses to play it.
 */
export function StoryVideo({ className }: { className?: string }) {
  const [playing, setPlaying] = useState(false);
  const playButton = useRef<HTMLButtonElement>(null);
  const poster = photos.videoPoster;

  return (
    <div
      id="watch-video"
      className={cn(
        "relative aspect-video scroll-mt-32 overflow-hidden rounded-[1.75rem] bg-evergreen",
        className
      )}
    >
      {playing ? (
        <>
          <video
            src="/videos/ever-safe-story-720p.mp4"
            poster={poster.src.src}
            controls
            autoPlay
            playsInline
            className="h-full w-full bg-evergreen object-cover"
            aria-label="Ever Safe film"
          />
          <button
            type="button"
            onClick={() => {
              setPlaying(false);
              requestAnimationFrame(() => playButton.current?.focus());
            }}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-evergreen/70 text-ivory backdrop-blur transition-colors hover:bg-evergreen"
          >
            <X aria-hidden="true" className="h-5 w-5" />
            <span className="sr-only">Close video</span>
          </button>
        </>
      ) : (
        <button
          ref={playButton}
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full text-left"
        >
          <Image
            src={poster.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover transition-transform duration-[900ms] ease-out-soft group-hover:scale-[1.03]"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-evergreen/80 via-evergreen/10 to-transparent" />
          <span className="absolute bottom-0 left-0 flex items-center gap-4 p-6 sm:p-8">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory text-forest shadow-lg transition-transform duration-300 ease-out-soft group-hover:scale-105">
              <Play aria-hidden="true" className="ml-1 h-6 w-6" fill="currentColor" />
            </span>
            <span className="text-ivory">
              <span className="block font-semibold">Play the Ever Safe film</span>
              <span className="block text-sm text-ivory/75">1 min 31 sec · with sound</span>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
