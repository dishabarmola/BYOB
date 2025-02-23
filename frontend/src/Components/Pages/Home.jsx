import React from 'react';
import CarouselComponent from '../Home/crousel';
import Product from '../Home/product';
import TeamCard from '../Home/TeamCard';
import teamData from '../Home/teamdata';
import contactData from '../Home/contact-data';
import {
  Card,
  Typography,
} from "@material-tailwind/react";
// import Resource from '../Home/resource';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CarouselComponent />
      <Product/>
      {/* <Resource/> */}
      <section className="relative bg-white py-24 px-4 flex flex-col align-center justify-center">
        <div className="container mx-auto flex flex-col justify-center">
          <h3 className="text-xl font-bold text-center text-black mb-2">Find Business</h3>
          <h1 className="text-5xl font-bold text-center mb-8">
            
          </h1>

          <div className="mx-auto mt-20 mb-5 grid max-w-3xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-2">
            {contactData.map(({ title, imageurl, description }) => (
              <a
                key={title}
                href="#"
                className="transition-transform duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Card
                  color="white"
                  shadow={false}
                  className="p-8 rounded-2xl border border-gray-200 shadow-lg text-center text-blue-gray-900 
                             transition-all duration-300 hover:border-red-500 hover:shadow-2xl"
                >
                  <div className="mx-auto mb-6 grid place-items-center">
                    <img
                      src={imageurl}
                      alt={title}
                      className="h-32 w-32 rounded-2xl bg-blue-gray-100 shadow-md"
                    />
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
                    {title}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    {description}
                  </Typography>
                </Card>
              </a>
            ))}
          </div>

          <button
            className="mt-8 mx-auto px-6 py-4 rounded-xl border border-red-500 text-red-500 
                       hover:bg-red-500 hover:text-white transition"
          >
            See all
          </button>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="px-4 pt-20 pb-10">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">
            <span className="text-red-500">Services We Provide</span>
          </h1>

          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ imageurl, name, position }) => (
              <TeamCard
                key={name}
                img={imageurl}
                name={name}
                position={position}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
