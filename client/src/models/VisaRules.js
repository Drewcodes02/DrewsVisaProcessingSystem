const mongoose = require('mongoose');

const VisaRulesSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  visaType: {
    type: String,
    required: true,
  },
  eligibilityCriteria: {
    type: [String],
    required: true,
  },
  requiredDocuments: {
    type: [String],
    required: true,
  },
  processingTime: { 
    type: String,
    required: true,
  },
  // Any other necessary rules and information
});

module.exports = mongoose.model('VisaRules', VisaRulesSchema);
