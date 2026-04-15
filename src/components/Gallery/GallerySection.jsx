import Image from 'next/image';

const images = [
  { src: '/assets/image-1.png', alt: 'Large rock formation', className: 'md:col-span-3 md:row-span-2' },
  { src: '/assets/image-3.png', alt: 'Person walking on dunes', className: 'md:col-span-1 md:row-span-2' },
  { src: '/assets/neet.png', alt: 'Camel caravan', className: 'md:col-span-1 md:row-span-2' },
  { src: '/assets/strong-2.png', alt: 'Tea at sunset', className: 'md:col-span-1 md:row-span-2' },
  { src: '/assets/strong-1.png', alt: 'Slot canyon', className: 'md:col-span-2 md:row-span-2' },
  { src: '/assets/strong-4.png', alt: 'Blue sky', className: 'md:col-span-1 md:row-span-1' },
  { src: '/assets/mission.jpg', alt: 'Golden sky', className: 'md:col-span-3 md:row-span-1' },
];

export default function PhotoGallery() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl ${img.className}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}