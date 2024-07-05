// Adventure.js

import React from 'react';

const Adventure = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mb-4">
      {imageUrl && (
        <img className="w-full h-56 object-cover object-center" src={imageUrl} alt={title} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Adventure;
