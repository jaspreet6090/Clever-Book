// src/Carousel.js
import React, { useState, useEffect } from 'react';

const data = [
  {
    name: "Diksha Pande",
    position: "Co-founder, Samosa Party",
    text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Clerk Books automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Clerk Books unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    img: "./carousel-img/2.jpg", // replace with actual image path
    img2:"./carousel-img/image.png"
  },
  {
    name: "John Doe",
    position: "CEO, Example Corp",
    text: "Clerk Books has significantly improved our supply chain efficiency and helped us predict demand accurately. The team at Clerk Books is fantastic and their product is top-notch.Clerk Books has significantly improved our supply chain efficiency and helped us predict demand accurately. The team at Clerk Books is fantastic and their product is top-notch. The team at Clerk Books is fantastic and their product is top-notch.",
    img: "./carousel-img/1.jpg", // replace with actual image path
    img2:"./carousel-img/image.png"
  },
  {
    name:"Daina Louis",
    position:"Co-founder, XYZ",
    text:"Clerk Books is a game-changer for us. It has helped us streamline our supply chain and improve our overall efficiency.    Clerk Books has significantly improved our supply chain efficiency and helped us predict demand accurately. The team at Clerk Books is fantastic and their product",
    img:"./carousel-img/3.jpg",
    img2:"./carousel-img/image.png"
  }
  // Add more items as needed
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % length);
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(timer);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  const setSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className='mt-40 bg-slate-900 text-white py-10 '>
    <h2 className="text-center text-4xl font-extrabold mb-20">Founder That Find Helpful </h2>
      <div className="relative max-w-5xl mx-auto mt-10">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="min-w-full p-4">
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <div className="">
                  <img
                  src={item.img}
                  alt={item.name}
                  className="w-30 h-[150px] rounded-full mb-4"
                />
              </div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.position}</p>
                <p className="text-center text-gray-700">{item.text}</p>
                {/* <img src={item.img2} alt="" className='w-30 h-[150px] rounded-full mb-4' /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-3xl text-gray-600 bg-white p-2 rounded-full shadow-lg"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-3xl text-gray-600 bg-white p-2 rounded-full shadow-lg"
      >
        &#10095;
      </button>
      <div className="flex justify-center mt-4">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={`h-2 w-2 rounded-full mx-1 ${current === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Carousel;
