const mongoose = require('mongoose')
const feedbackSchema = mongoose.Schema({
  username: String,
  email: String,
  feedbackText: String,
  timestamp: { type: Date, default: Date.now },
  category: { type: String, enum: ['suggestion', 'bug report', 'feature request'], default: 'suggestion' }, // Optional
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports= Feedback