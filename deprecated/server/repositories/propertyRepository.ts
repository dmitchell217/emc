import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  images: [String],
  status: String,
  location: String,
  price: Number,
  salePrice: Number,
  monthlyRentalRate: Number,
  hourlyRentalRate: Number,
});

const Property = mongoose.model('Properties', propertySchema);

class PropertyRepository {
  async getProperties() {
    return await Property.find();
  }

  async getProperty(id: string) {
    return await Property.findById(id);
  }

  async createProperty(property: object) {
    return await Property.create(property);
  }

  async updateProperty(id: string, property: object) {
    return await Property.findByIdAndUpdate(id, property, { new: true });
  }

  async deleteProperty(id: string) {
    return await Property.findByIdAndDelete(id);
  }
}

export default new PropertyRepository();
