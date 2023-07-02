import express from 'express';
import InquiryController from '../controllers/inquiryController';

const router = express.Router();

router.get('/inquiries', InquiryController.getInquiries);
router.get('/inquiries/:id', InquiryController.getInquiry);
router.post('/inquiries', InquiryController.createInquiry);
router.put('/inquiries/:id', InquiryController.updateInquiry);
router.delete('/inquiries/:id', InquiryController.deleteInquiry);

export default router;
