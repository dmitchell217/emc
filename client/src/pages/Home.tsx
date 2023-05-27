import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import propertyImage from '../../public/propertyImages/1001-West-Paces-Ferry.jpg'

const Home: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3001/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow w-full">
        <Carousel className="my-8 w-full">
          {properties.map((property) => (
            <div key={property._id} className="relative w-full ">
              <img src={propertyImage} alt={property.name} className="object-cover h-full w-full" />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-2xl font-bold">{property.name}</h2>
                <p className="text-sm">{property.description}</p>
                <Link to={`/properties/${property._id}`} className="text-blue-500 hover:underline">View Details</Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
