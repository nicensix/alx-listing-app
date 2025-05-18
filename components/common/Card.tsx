import React from 'react';

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover rounded-md"/>
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
