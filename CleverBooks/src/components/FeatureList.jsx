import React, { useState } from 'react';

const features = [
  {
    title: "Accurate Demand Forecasting",
    description: "Feature 1 Description",
    img: "./feature/1.png" // replace with actual image path
  },
  {
    title: "HELIX: Workflow Automation",
    description: "Feature 2 Description",
    img: "./feature/2.png" // replace with actual image path
  },
  {
    title: "Automated Purchase Planning",
    description: "Feature 3 Description",
    img: "./feature/3.png" // replace with actual image path
  },
  {
    title: "Automated Distribution Planning",
    description: "Feature 4 Description",
    img: "./feature/1.png" // replace with actual image path
  },
  {
    title: "Easy Integration",
    description: "From all online store solutions to cloud ERPs, Clerk Books integrates seamlessly with your current tech and ops stack. What’s more? Connecting them to Clerk Books will give you actionable insights.",
    img: "./feature/2.png" // replace with actual image path
  },
  {
    title: "Custom Dashboards",
    description: "Feature 6 Description",
    img: "./feature/3.png" // replace with actual image path
  },
  {
    title: "Consensus Planning",
    description: "Feature 7 Description",
    img: "./feature/1.png" // replace with actual image path
  },
];

const FeatureList = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className='my-20 mx-3 sm:ml-20'>
      <h2 className="text-4xl font-bold mb-10 text-center">Things your spreadsheet wishes it could do</h2>
      <div className="flex flex-wrap md:flex-nowrap md:space-x-4">
        <div className="w-full md:w-1/2 text-xl">
          <ul>
            {features.map((feature, index) => (
              <li
                key={index}
                onClick={() => setSelectedFeature(feature)}
                className={`p-4 cursor-pointer border-b-2 ${selectedFeature.title === feature.title ? 'text-purple-500 font-semibold' : ''}`}
              >
                {feature.title}
                {selectedFeature.title === feature.title && (
                  <p className="text-gray-600 mt-2 font-extralight">{feature.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg">
          <img src={selectedFeature.img} alt={selectedFeature.title} className="w-full h-full object-contain" />
        </div>
      </div>
      <button className="block text-lg mx-auto mt-10 text-left py-2 bg-gradient-to-r from-purple-400 to-pink-600 text-white rounded  w-auto px-3 ">View More</button>
    </section>
  );
};

export default FeatureList;
