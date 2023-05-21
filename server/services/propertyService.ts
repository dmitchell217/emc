import PropertyRepository from '../repositories/propertyRepository';

class PropertyService {
  async getProperties() {
    return await PropertyRepository.getProperties();
  }

  async getProperty(id: string) {
    return await PropertyRepository.getProperty(id);
  }

  async createProperty(property: object) {
    // Here you could add any additional business logic before creating a property
    return await PropertyRepository.createProperty(property);
  }

  async updateProperty(id: string, property: object) {
    // Here you could add any additional business logic before updating a property
    return await PropertyRepository.updateProperty(id, property);
  }

  async deleteProperty(id: string) {
    // Here you could add any additional business logic before deleting a property
    return await PropertyRepository.deleteProperty(id);
  }
}

export default new PropertyService();
