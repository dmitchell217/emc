import express from 'express';
import PropertyController from '../controllers/propertyController';

const router = express.Router();

router.get('/properties', PropertyController.getProperties);
router.get('/properties/:id', PropertyController.getProperty);
router.post('/properties', PropertyController.createProperty);
router.put('/properties/:id', PropertyController.updateProperty);
router.delete('/properties/:id', PropertyController.deleteProperty);

export default router;
