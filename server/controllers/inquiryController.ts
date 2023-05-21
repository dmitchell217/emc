import InquiryService from '../services/inquiryService';
import { Request, Response } from 'express';

class InquiryController {
  async getInquiries(req: Request, res: Response) {
    const inquiries = await InquiryService.getInquiries();
    res.json(inquiries);
  }

  async getInquiry(req: Request, res: Response) {
    const inquiry = await InquiryService.getInquiry(req.params.id);
    res.json(inquiry);
  }

  async createInquiry(req: Request, res: Response) {
    const inquiry = await InquiryService.createInquiry(req.body);
    res.json(inquiry);
  }

  async updateInquiry(req: Request, res: Response) {
    const inquiry = await InquiryService.updateInquiry(req.params.id, req.body);
    res.json(inquiry);
  }

  async deleteInquiry(req: Request, res: Response) {
    await InquiryService.deleteInquiry(req.params.id);
    res.json({ message: 'Inquiry deleted' });
  }
}

export default new InquiryController();
