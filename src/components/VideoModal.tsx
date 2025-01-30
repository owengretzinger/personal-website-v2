"use client";

import { IconBrandYoutube } from "@tabler/icons-react";
import { useState } from "react";

export default function VideoModal({ demoUrl }: { demoUrl: string }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .modal-overlay {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .modal-content {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <button
        onClick={() => setShowVideo(true)}
        className="group/link relative z-10 flex items-center gap-[4px] text-grey transition-all hover:text-darkTeal focus-visible:text-darkTeal"
      >
        <IconBrandYoutube
          size={19}
          stroke={1.25}
          className={`transition group-hover/link:-translate-y-1 group-hover/link:text-darkTeal group-focus-visible/link:-translate-y-1`}
        />
        <p className="">Demo</p>
      </button>

      {showVideo && (
        <div
          className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-[#000]/80"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="modal-content relative mx-4 aspect-video w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={demoUrl}
              className="h-full w-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
