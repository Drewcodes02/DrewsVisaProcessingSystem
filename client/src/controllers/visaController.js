const VisaRules = require('../models/VisaRules');
const VisaApplication = require('../models/VisaApplication');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// Create a directory for uploaded files if it doesn't exist
const uploadDir = path.join(__dirname, '..', 'uploads');
fs.existsSync(uploadDir) || fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const fileName = uuidv4() + fileExt;
    cb(null, fileName);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.'), false);
  }
};

exports.upload = multer({ storage, fileFilter });

exports.createVisaRule = async (req, res) => {
  try {
    const newVisaRule = new VisaRules(req.body);
    await newVisaRule.save();
    res.status(201).json(newVisaRule);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

exports.getVisaRules = async (req, res) => {
  //...existing code...
};

exports.getVisaRuleById = async (req, res, next) => {
  try {
    const visaRule = await VisaRules.findById(req.params.id);

    if (!visaRule) {
      throw new createError(404, 'Visa rule not found');
    }

    res.json(visaRule);
  } catch (error) {
    next(error);
  }
};

exports.saveApplication = async (req, res) => {
  //...existing code...
};

exports.resizeAndStoreDocument = async (req, res, next) => {
  if (!req.file) return next();

  const newFilename = `${req.file.filename}-resized${path.extname(req.file.originalname)}`;
  const newPath = path.join(uploadDir, newFilename);

  try {
    await sharp(req.file.path)
      .resize(640, null)
      .toFile(newPath);

    if (!req.body.documents) req.body.documents = [];
    req.body.documents.push({
      documentType: req.file.mimetype,
      documentPath: newPath
    });

    fs.unlink(req.file.path, (err) => {
      if (err) console.error('Unable to delete original file:', err);
    });

    next();
  } catch (error) {
    console.error(error);
    return res.status(422).json({ error: 'Unable to process the image file' });
  }
};

exports.updateVisaRule = async (req, res) => {
  try {
    const { id } = req.params;
    let visaRule = await VisaRules.findById(id);

    if (!visaRule) {
      return res.status(404).json({ msg: 'Visa rule not found' });
    }

    // Update the properties that are sent in the request
    Object.keys(req.body).forEach(key => {
      visaRule[key] = req.body[key];
    });

    await visaRule.save();

    res.json(visaRule);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
