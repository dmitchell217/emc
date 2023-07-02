import mongoose from 'mongoose';
import PropertyRepository from './repositories/propertyRepository';
import InquiryRepository from './repositories/inquiryRepository';
import { uri } from './utils/mongoDB';

const propertyNames = ["fives", "dagger", "microcosm", "hydride", "kazoo"];
const propertyPrices = [583.42, 420.73, 627.99, 149.09, 222.84];
const propertyTypes = ["Commercial", "Residential", "Residential", "Commercial", "Residential"];
const propertyStatuses = ["Available", "Sold", "Available", "Sold", "Available"];

const inquiryNames = ["saturnalia", "firebrick", "quarrying", "forensics", "chert"];
const inquiryEmails = ["saturnalia@example.com", "firebrick@example.com", "quarrying@example.com", "forensics@example.com", "chert@example.com"];
const inquiryMessages = ["Interested in this property.", "Can I schedule a visit?", "Is this property still available?", "What is the price?", "Can you send more pictures?"];

async function main() {
    await mongoose.connect(uri, {dbName: 'db1'});

    for (let i = 0; i < 5; i++) {
        const property = {
          name: propertyNames[i],
          type: propertyTypes[i],
          description: `This is a description for ${propertyNames[i]}`,
          images: [`https://example.com/images/${propertyNames[i]}.jpg`],
          status: propertyStatuses[i],
          location: `Location ${i}`,
          price: propertyPrices[i],
        };
    
        const inquiry = {
          name: inquiryNames[i],
          email: inquiryEmails[i],
          message: inquiryMessages[i],
          property: propertyNames[i],
          isResolved: false,
        };
    
        await PropertyRepository.createProperty(property);
        await InquiryRepository.createInquiry(inquiry);
      }

    await mongoose.disconnect();
}

if (require.main === module) {
    main();
}
