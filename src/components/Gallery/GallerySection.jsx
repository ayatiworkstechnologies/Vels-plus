"use client";

import { useState } from "react";
import Image from "next/image";

/* ===================== PHOTO GALLERY ===================== */
const galleryImages = [
  { src: "/assets/gal-1.webp", colSpan: "md:col-span-3", rowSpan: "md:row-span-2" },
  { src: "/assets/gal-3.webp", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { src: "/assets/gal-4.webp", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { src: "/assets/gal-2.webp", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { src: "/assets/gal-5.webp", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: "/assets/gal-6.webp", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/gal-14.webp", colSpan: "md:col-span-3", rowSpan: "md:row-span-1" },
];

/* ===================== ORIENTATION (SAME STYLE) ===================== */
const orientationImages = [
  { src: "/assets/img-1.jpg", colSpan: "md:col-span-3", rowSpan: "md:row-span-2" },
  { src: "/assets/img-2.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { src: "/assets/img-3.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { src: "/assets/img-4.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { src: "/assets/img-5.jpg", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: "/assets/img-6.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-7.jpg", colSpan: "md:col-span-3", rowSpan: "md:row-span-1" },
  { src: "/assets/img-8.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-9.jpg", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
  { src: "/assets/img-10.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-11.jpg", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
  { src: "/assets/img-12.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-13.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-14.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-15.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-16.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-17.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-18.jpg", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
  { src: "/assets/img-19.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/assets/img-20.jpg", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
];

function ImageGrid({ images, openModal }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[180px]">
      {images.map((img, i) => (
        <div
          key={i}
          onClick={() => openModal(images, i)}
          className={`relative overflow-hidden rounded-2xl cursor-pointer ${img.colSpan} ${img.rowSpan}`}
        >
          <Image
            src={img.src}
            alt="gallery"
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
      ))}
    </div>
  );
}

/* ===================== MAIN ===================== */
export default function GalleryOrientation() {
  const [activeTab, setActiveTab] = useState("gallery");

  const [modal, setModal] = useState({
    open: false,
    index: 0,
    images: [],
  });

  const openModal = (images, index) => {
    setModal({ open: true, index, images });
  };

  const tabs = [
    { id: "gallery", label: "Photo Gallery" },
    { id: "orientation", label: "Orientation" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-primary">
         Photo Gallery
        </h2>
        <p className="text-gray-500">
          A glimpse into our vibrant campus life and events.
        </p>
      </div>

      {/* TABS */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition
                ${
                  activeTab === tab.id
                    ? "bg-white text-black shadow"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      {activeTab === "gallery" && (
        <ImageGrid images={galleryImages} openModal={openModal} />
      )}
      {activeTab === "orientation" && (
        <ImageGrid images={orientationImages} openModal={openModal} />
      )}

      {/* ================= MODAL ================= */}
      {modal.open && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex flex-col justify-center items-center p-4">

          {/* CLOSE */}
          <button
            onClick={() => setModal({ ...modal, open: false })}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* IMAGE */}
          <div className="relative w-full max-w-5xl h-[70vh]">
            <Image
              src={modal.images[modal.index].src}
              alt="preview"
              fill
              className="object-contain"
            />
          </div>

          {/* NAV */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() =>
                setModal({
                  ...modal,
                  index:
                    (modal.index - 1 + modal.images.length) %
                    modal.images.length,
                })
              }
              className="text-white bg-white/20 px-4 py-2 rounded"
            >
              Prev
            </button>

            <button
              onClick={() =>
                setModal({
                  ...modal,
                  index: (modal.index + 1) % modal.images.length,
                })
              }
              className="text-white bg-white/20 px-4 py-2 rounded"
            >
              Next
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-2 overflow-x-auto mt-6 max-w-5xl w-full px-2">
            {modal.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setModal({ ...modal, index: i })}
                className={`relative w-20 h-16 flex-shrink-0 cursor-pointer border-2 ${
                  modal.index === i ? "border-white" : "border-transparent"
                }`}
              >
                <Image
                  src={img.src}
                  alt="thumb"
                  fill
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>

        </div>
      )}
    </section>
  );
}