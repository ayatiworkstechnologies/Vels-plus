import Image from 'next/image';

const images = [
  { src: '/assets/gal-1.webp', alt: 'Large rock formation', className: 'md:col-span-3 md:row-span-2' },
  { src: '/assets/gal-3.webp', alt: 'Person walking on dunes', className: 'md:col-span-1 md:row-span-2' },
  { src: '/assets/gal-4.webp', alt: 'Camel caravan', className: 'md:col-span-1 md:row-span-2' },
  { src: '/assets/gal-2.webp', alt: 'Tea at sunset', className: 'md:col-span-1 md:row-span-2' },
  { src: '/assets/gal-5.webp', alt: 'Slot canyon', className: 'md:col-span-2 md:row-span-2' },
  { src: '/assets/gal-6.webp', alt: 'Blue sky', className: 'md:col-span-1 md:row-span-1' },
  { src: '/assets/gal-14.webp', alt: 'Golden sky', className: 'md:col-span-3 md:row-span-1' },
  { src: '/assets/gal-8.webp', alt: 'Large rock formation', className: 'md:col-span-3 md:row-span-2' },
  { src: '/assets/gal-9.webp', alt: 'Person walking on dunes', className: 'md:col-span-1 md:row-span-2' },
  { src: '/assets/gal-10.webp', alt: 'Camel caravan', className: 'md:col-span-1 md:row-span-2' },
  { src: '/assets/gal-11.webp', alt: 'Tea at sunset', className: 'md:col-span-1 md:row-span-2' },
  { src: '/assets/gal-12.webp', alt: 'Slot canyon', className: 'md:col-span-2 md:row-span-2' },
  { src: '/assets/gal-13.webp', alt: 'Blue sky', className: 'md:col-span-1 md:row-span-1' },
  { src: '/assets/gal-7.webp', alt: 'Golden sky', className: 'md:col-span-3 md:row-span-1' },
];

export default function PhotoGallery() {
  return (
    <div className="max-w-7xl mx-auto p-4">
       <div className="mb-8 text-center">
        <h2 className="text-3xl font-primary text-gray-900 mb-2">Photo Gallery</h2>
        <p className="text-lg text-gray-600">A glimpse into our vibrant campus life and events.</p>
      </div>
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