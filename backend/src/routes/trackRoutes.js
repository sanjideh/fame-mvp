const express = require('express');
const { uploadTrack } = require('../controllers/trackController');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', protect, upload.single('file'), uploadTrack);

module.exports = router;