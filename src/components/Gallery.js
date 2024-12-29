import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "image1.jpg", // Add your image filenames here
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
  ];

  return (
    <div className="gallery">
      <h2>My Work Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={`./images/${image}`}  // Make sure images are placed in the public/images folder
              alt={`Gallery item ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
