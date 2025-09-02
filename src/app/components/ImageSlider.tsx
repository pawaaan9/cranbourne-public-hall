'use client'

import React from "react";
import Image, { StaticImageData } from "next/image";
import img1 from "@/assets/gallary/gallery1.jpg";
import img2 from "@/assets/gallary/gallery2.jpg";
import img3 from "@/assets/gallary/gallery3.jpg";
import img4 from "@/assets/gallary/gallery4.jpg";
import img5 from "@/assets/gallary/gallery5.jpg";

const images: StaticImageData[] = [img1, img2, img3, img4, img5];

const useImagesPerSlide = () => {
  const [imagesPerSlide, setImagesPerSlide] = React.useState(3);
  React.useEffect(() => {
    const update = () => setImagesPerSlide(window.innerWidth < 640 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return imagesPerSlide;
};


const ImageSlider: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const imagesPerSlide = useImagesPerSlide();

  // Auto-slide (one-way, resets to start after last)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + imagesPerSlide < images.length ? prev + imagesPerSlide : 0));
    }, 3500);
    return () => clearInterval(interval);
  }, [imagesPerSlide]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + imagesPerSlide < images.length ? prev + imagesPerSlide : 0));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - imagesPerSlide >= 0 ? prev - imagesPerSlide : images.length - imagesPerSlide));
  };

  const visibleImages = images.slice(current, current + imagesPerSlide);

  // Responsive image size
  const getImageSize = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return { width: 360, height: 260 };
    }
    return { width: 400, height: 250 };
  };
  const { width, height } = getImageSize();

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="flex items-center justify-center gap-4 w-full">
        <button onClick={prevSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className={`grid grid-cols-${imagesPerSlide} gap-4 w-full`}>
          {visibleImages.map((src, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden aspect-video bg-gray-100">
              <Image src={src} alt={`Gallery ${idx}`} width={width} height={height} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {Array.from({ length: Math.ceil(images.length / imagesPerSlide) }).map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${i * imagesPerSlide === current ? "bg-orange-500" : "bg-gray-300"}`}></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
