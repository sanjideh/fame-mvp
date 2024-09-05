const Track = require('../models/trackModel');
const { s3 } = require('../config/awsConfig');
const crypto = require('crypto');

exports.uploadTrack = async (req, res) => {
  try {
    const { title, artist, album } = req.body;
    const file = req.file;
    
    // Generate file hash
    const fileHash = crypto.createHash('sha256').update(file.buffer).digest('hex');
    
    // Upload to S3
    const params = {
      Bucket: 'YOUR_S3_BUCKET_NAME',
      Key: `tracks/${fileHash}`,
      Body: file.buffer
    };
    
    const s3Response = await s3.upload(params).promise();
    
    const track = await Track.create({
      title,
      artist,
      album,
      fileUrl: s3Response.Location,
      fileHash,
      user: req.user._id  // Assuming you have authentication middleware
    });
    
    res.status(201).json(track);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add more controller functions as needed