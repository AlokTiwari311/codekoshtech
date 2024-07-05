import { useState } from 'react';

const Card = ({ image, heading, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg mx-auto my-4 items-center py-8 px-4 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="h-1/2 mx-auto" src={image} alt="Card" />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{heading}</h3>
        <p className="text-gray-100 text-base">{text}</p>
      </div>
      {isHovered && (
        <div className="absolute inset-0 border-2 border-blue-500 rounded-lg animate-pulse pointer-events-none"></div>
      )}
    </div>
  );
};

const CardGrid = ({ cardsData }) => {
  return (
    <div className="mx-auto mt-8 w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </div>
  );
};
