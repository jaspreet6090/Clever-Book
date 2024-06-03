import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">CleverBooks</h3>
          <p className="text-gray-400">
            CleverBooks is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimize space and fulfill every order.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Product</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Learn</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact CleverBooks</h4>
          <p className="text-gray-400 mb-4">sales@getCleverBooks.ai</p>
          <p className="text-gray-400 mb-4">Registered Office:<br />
            1507, Incubex, 11th cross road,<br />
            19th Main Road, Bengaluru,<br />
            India. 560102</p>
          <p className="text-gray-400">Corporate Office:<br />
            291, All Time Space, 4th Floor,<br />
            15th A Cross, Sector - 6,<br />
            HSR Layout, Bengaluru,<br />
            India. 560102</p>
         <div className="flex space-x-4 text-xl">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
        </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-10">
        <p className="text-gray-400">&copy; 2024 CleverBooks | Terms of Service | Privacy Policy</p>
       
        <a href="#" className="text-gray-500 hover:text-white text-2xl">
        <i class="fa-solid fa-arrow-up"></i>
        </a>
      </div>

      <div className="text-gray-500 text-center text-lg">
        Developed with ❤️ by Jaspreet Singh
      </div>
    </footer>
  );
};

export default Footer;
