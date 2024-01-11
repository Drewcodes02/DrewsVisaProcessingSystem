const mongoose = require('mongoose');

const ApplicantProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    nationality: { type: String, required: true },
    // Add other personal info fields as needed
  },
  contactInfo: {
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    // Add other contact info fields as needed
  },
  // Any other necessary fields for the profile
});

module.exports = mongoose.model('ApplicantProfile', ApplicantProfileSchema);
