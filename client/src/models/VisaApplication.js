const mongoose = require('mongoose');

const VisaApplicationSchema = new mongoose.Schema({
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'ApplicantProfile',
  },
  visaType: {
    type: String,
    required: true,
  },
  originatingCountry: {
    type: String,
    required: true,
  },
  destinationCountry: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'approved', 'denied', 'processing'],
    default: 'pending',
  },
  applicationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  documents: [{
    documentType: String,
    documentPath: String,
  }],
  // Any other necessary fields for the visa application
});

module.exports = mongoose.model('VisaApplication', VisaApplicationSchema);
