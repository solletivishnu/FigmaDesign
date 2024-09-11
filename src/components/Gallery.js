import React, { useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([
    'https://img.freepik.com/free-vector/mandala-illustration_53876-75291.jpg?size=626&ext=jpg&ga=GA1.1.822372411.1722922089&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/liquid-purple-art-painting-abstract-colorful-background-with-color-splash-paints-modern-art_1258-97771.jpg?size=626&ext=jpg&ga=GA1.1.822372411.1722922089&semt=ais_hybrid',
    'https://img.freepik.com/free-vector/glowing-particles-background_23-2148090750.jpg?size=626&ext=jpg&ga=GA1.1.822372411.1722922089&semt=ais_hybrid',
  ]);
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImageUrl = URL.createObjectURL(files[0]); 
      setImages([...images, newImageUrl]);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Gallery</h2>
        <div className="flex space-x-2">
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            onClick={() => document.getElementById('fileInput').click()}
            className="bg-blue-500 text-white py-1 px-3 rounded-lg shadow"
          >
            + Add Image
          </button>
          <button className="bg-gray-600 text-white p-2 rounded-full">
            ←
          </button>
          <button className="bg-gray-600 text-white p-2 rounded-full">
            →
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex space-x-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery item ${index}`}
                className="w-32 h-32 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
