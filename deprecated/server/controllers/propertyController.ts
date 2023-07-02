
import { Request, Response } from 'express';

import PropertyService from '../services/propertyService';

class PropertyController {
  async getProperties(req: Request, res: Response) {
    const properties = await PropertyService.getProperties();
    res.json(properties);
  }

  async getProperty(req: Request, res: Response) {
    const property = await PropertyService.getProperty(req.params.id);
    res.json(property);
  }

  async createProperty(req: Request, res: Response) {
    const property = await PropertyService.createProperty(req.body);
    res.json(property);
  }

  async updateProperty(req: Request, res: Response) {
    const property = await PropertyService.updateProperty(req.params.id, req.body);
    res.json(property);
  }

  async deleteProperty(req: Request, res: Response) {
    await PropertyService.deleteProperty(req.params.id);
    res.json({ message: 'Property deleted' });
  }
}

export default new PropertyController();
