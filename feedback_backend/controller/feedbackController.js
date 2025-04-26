const Feedback = require('../model/schema.js')
const getFeedback = async (req, res) => {
    try {
      const { category, sortBy, sortOrder = 'asc' } = req.query;
      const filter = {};
      const sort = {};
  
      if (category) {
        filter.category = category;
      }
  
      if (sortBy) {
        sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
      } else {
        // Default sort by timestamp in descending order (newest first)
        sort.timestamp = -1;
      }
  
      const feedbackData = await Feedback.find(filter).sort(sort);
      res.status(200).json(feedbackData);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      res.status(500).json({ message: 'Failed to fetch feedback.', error: error.message });
    }
  }

const postFeedback = async (req, res) => {
    try {
      const newFeedback = new Feedback(req.body);
      const savedFeedback = await newFeedback.save();
      res.status(201).json({ message: 'Feedback submitted successfully!', data: savedFeedback });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      res.status(500).json({ message: 'Failed to submit feedback.', error: error.message });
    }
  }

module.exports = {
    getFeedback,
    postFeedback
};