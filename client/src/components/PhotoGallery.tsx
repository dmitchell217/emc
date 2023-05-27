import React from "react";
import propertyImage from "../../public/propertyImages/1001-West-Paces-Ferry.jpg"

function PhotoGallery() {
  // Assume photos is an array of URLs for the photos
  const photos = [
    "/propertyImages/1001-West-Paces-Ferry.jpg",
    "/propertyImages/1001-West-Paces-Ferry.jpg",
    // more photo URLs
  ];

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Show all photos</h2>
      <div className="mt-2 grid grid-cols-3 gap-4">
        {photos.map((photoUrl, index) => (
        //   <div key={index} className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${photoUrl})` }}></div>/
        <div key={index} className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${photoUrl})` }}></div>
        ))}
      </div>
      <div className="mt-2 flex justify-end space-x-2">
        {/* <button className="text-sm text-blue-500">Favorite</button>
        <button className="text-sm text-blue-500">Share</button> */}
      </div>
    </div>
  );
}

export default PhotoGallery;
