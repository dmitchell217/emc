import InquiryRepository from '../repositories/inquiryRepository';

class InquiryService {
  async getInquiries() {
    return await InquiryRepository.getInquiries();
  }

  async getInquiry(id: string) {
    return await InquiryRepository.getInquiry(id);
  }

  async createInquiry(inquiry: object) {
    return await InquiryRepository.createInquiry(inquiry);
  }

  async updateInquiry(id: string, inquiry: object) {
    return await InquiryRepository.updateInquiry(id, inquiry);
  }

  async deleteInquiry(id: string) {
    return await InquiryRepository.deleteInquiry(id);
  }
}

export default new InquiryService();
