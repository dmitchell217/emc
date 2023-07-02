import React from "react";

function PropertyHeader() {
  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold">Cre8ive 2-2: Flexible Chelsea Space</h1>
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-sm text-gray-600">New York, NY</p>
          <div className="flex space-x-2 mt-1">
            <p className="text-sm">2 hr min</p>
            <p className="text-sm">35 people</p>
            <p className="text-sm">323 sq/ft</p>
          </div>
          <div className="flex space-x-2 mt-1">
            <p className="text-sm">Production</p>
            <p className="text-sm">Event</p>
            <p className="text-sm">Meeting</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-sm text-blue-500">Favorite</button>
          <button className="text-sm text-blue-500">Share</button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">Reviews</h2>
        <div>
          <p className="text-sm">Natasha M.: Great space! Staff was very helpful...</p>
          <p className="text-sm">Victoria D.: The space was great. Thank you!</p>
          <p className="text-sm">Michael R.: Clean space, great amenities and wonderful people!</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyHeader;
