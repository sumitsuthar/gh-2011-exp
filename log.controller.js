const mongoose = require('mongoose');
// Create a Mongoose Schema
const LogSchema = new mongoose.Schema({
  id: {
  type: Number,
  required: true,
  },
  data: {
  type: String,
  required: true,
  },
  date: {
  type: Date,
  default: Date.now,
  },
});

// Create a Mongoose Model
const Log = mongoose.model('Log', LogSchema);

async function countDocuments(req, res, next) {
  const count = await Log.countDocuments();
  res.status(200).json({
    message: 'Log inserted successfully',
    count: count, // Increment count by 1 since the new log has been inserted
  });
}
async function save(req, res, next) {
  try {
  // Find count of documents in the collection
  const count = await Log.countDocuments();

  // Create a new log instance
  const newLog = new Log({
    id: req.body.id,
    data: req.body.data,
  });

  // Save the log to the database
  await newLog.save();

  res.status(200).json({
    message: 'Log inserted successfully',
    count: count + 1, // Increment count by 1 since the new log has been inserted
  });
  } catch (error) {
  res.status(500).json({ error: error.message });
  }
}

module.exports = {
save,
countDocuments

}
