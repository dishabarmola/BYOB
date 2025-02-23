import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  const photos = [
    'https://imageio.forbes.com/specials-images/imageserve/641474e41be43e91f6c324b7/Nothing-empowers-you-more-than-owning-your-own-small-business/960x0.jpg?height=462&width=711&fit=bounds',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOVn31HGlG56F8YQLj1HQHMDPsllxzq1Qpw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOC4sGND6mUDEQQCrL06GfClXvRRKOvFQfLg&s',
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[400px] overflow-hidden mb-0">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <input
          type="text"
          placeholder="Search the business you want to list"
          className="w-3/4 md:w-1/2 p-2 rounded-lg border border-gray-300 shadow-md"
        />
      </div>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        className="h-[60vh]"
      >
        {photos.map((photo, index) => (
          <div key={index} className="h-full">
            <img src={photo} alt={`Photo ${index + 1}`} className="object-cover h-full w-full" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;


