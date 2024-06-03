// src/components/CrestQuestions.js
import React from 'react';

const CrestQuestions = () => {
  return (
    <div className="container mx-auto py-12 px-10">
      <h2 className="text-center text-4xl font-extrabold mb-10">Four key questions answered by CleverBooks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div className="bg-purple-100 p-6 rounded-2xl text-left flex flex-col items-start">
          <div className="mb-4">
            {/* Icon for What to order */}
            <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">What to order</h3>
          <p>Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-2xl text-left flex flex-col items-start">
          <div className="mb-4">
            {/* Icon for When to order */}
            <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12l2-2 4 4 8-8 2 2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">When to order</h3>
          <p>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-2xl text-left flex flex-col items-start">
          <div className="mb-4">
            {/* Icon for How much to stock */}
            <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">How much to stock</h3>
          <p>Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-2xl text-left flex flex-col items-start">
          <div className="mb-4">
            {/* Icon for Where to place */}
            <svg className="w-12 h-12 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l9 4-9 4-9-4 9-4zm0 6l9 4-9 4-9-4 9-4zm0 6l9 4-9 4-9-4 9-4z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Where to place</h3>
          <p>Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
        </div>
      </div>
    </div>
  );
};

export default CrestQuestions;
