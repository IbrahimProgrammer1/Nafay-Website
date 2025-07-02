// components/Ad.jsx
"use client"
import React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay'; // Import the Autoplay plugin

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Ad = () => {
  // Create a ref for the Autoplay plugin
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }) // Autoplay every 3 seconds, stops on user interaction
  );

  return (
    // Adjusted wrapper div: Removed max-w-4xl to allow full page width.
    // Kept w-full and p-4 for padding from page edges.
    <div className="w-full p-4 border border-gray-300 rounded-lg shadow-md">
      <Carousel
        className="w-full"
        plugins={[plugin.current]} // Apply the autoplay plugin
        opts={{
          loop: true, // Make the carousel loop continuously
        }}
      >
        <CarouselContent>
          {/* Carousel Item 1 */}
          <CarouselItem className="flex items-center justify-center min-w-full h-[300px] bg-gray-100 border border-gray-200">
            <Image
              src="/laptop1.jpg"
              alt="Powerful Laptop 1"
              width={800} // IMPORTANT: Provide actual intrinsic width of laptop1.jpg for best results
              height={300} // IMPORTANT: Provide actual intrinsic height of laptop1.jpg
              className="object-contain w-full h-full"
              priority
            />
          </CarouselItem>

          {/* Carousel Item 2 */}
          <CarouselItem className="flex items-center justify-center min-w-full h-[300px] bg-gray-100 border border-gray-200">
            <Image
              src="/laptop2.jpg"
              alt="Sleek Laptop 2"
              width={800} // IMPORTANT: Provide actual intrinsic width of laptop2.jpg
              height={300} // IMPORTANT: Provide actual intrinsic height of laptop2.jpg
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </CarouselItem>

          {/* Add more CarouselItems as needed */}
          <CarouselItem className="flex items-center justify-center min-w-full h-[300px] bg-gray-100 border border-gray-200 text-2xl font-bold">
            More awesome content here!
          </CarouselItem>

        </CarouselContent>
        {/* Navigation buttons: You can conditionally hide these if you only want autoplay */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </Carousel>
    </div>
  );
};

export default Ad;