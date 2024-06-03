import React from 'react';

const Hero = () => {
  return (
    <section className="bg-slate-900 text-white py-10 sm:py-32 px-20">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center justify-between ">
        <div className="md:w-1/2 text-start md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl lg:text-7x font-semibold mb-4">
            Every order fulfilled, <span className="text-purple-400">on time.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-md mb-8">
            Eliminate overstocking and under-stocking with CleverBooks. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
          </p>

          <div className=" relative ">
            <a href="#" className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-6 py-3 rounded-full text-lg inline-block">
              Get started with Us
            </a>
            <div className="absolute left-52 top-[20px] ">
              <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="Illustration" className="w-full h-auto md:max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
