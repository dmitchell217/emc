import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  propertyId: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
  isResolved: { type: Boolean, default: false },
});

const Inquiry = mongoose.model('inquiries', inquirySchema);

class InquiryRepository {
    async getInquiries() {
      return await Inquiry.find();
    }
  
    async getInquiry(id: string) {
      return await Inquiry.findById(id);
    }
  
    async createInquiry(inquiry: object) {
      return await Inquiry.create(inquiry);
    }
  
    async updateInquiry(id: string, inquiry: object) {
      return await Inquiry.findByIdAndUpdate(id, inquiry, { new: true });
    }
  
    async deleteInquiry(id: string) {
      return await Inquiry.findByIdAndDelete(id);
    }
  }
  
  export default new InquiryRepository();