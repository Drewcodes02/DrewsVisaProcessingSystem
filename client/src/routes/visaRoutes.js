const express = require('express');
const passport = require('passport');
const visaController = require('../controllers/visaController');
const authorize = require('../middleware/authorize');
const router = express.Router();
const validateObjectId = require('../middleware/validateObjectId');

router.get('/rules', visaController.getVisaRules);

router.get('/rules/:id', 
  passport.authenticate('jwt', { session: false }),
  authorize('administrator'),
  validateObjectId,
  visaController.getVisaRuleById
);

router.post('/apply',
  passport.authenticate('jwt', { session: false }),
  visaController.upload.single('document'),
  visaController.resizeAndStoreDocument,
  visaController.saveApplication
);

router.put('/rules/:id',
  passport.authenticate('jwt', { session: false }),
  validateObjectId,
  authorize('administrator'),
  visaController.updateVisaRule
);

router.post('/rules',
  passport.authenticate('jwt', { session: false }),
  authorize('administrator'),
  visaController.createVisaRule
);

module.exports = router;
