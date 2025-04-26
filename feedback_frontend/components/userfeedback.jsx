'use client'
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [category, setCategory] = useState('suggestion');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus('submitting'); 

    try {
      const response = await axios.post('http://localhost:5000/feedback/', {
        username,
        email,
        feedbackText,
        category,
      });
      setSubmissionStatus('success');
      setUsername('');
      setEmail('');
      setFeedbackText('');
      setTimeout(() => setSubmissionStatus(null), 3000);
      console.log('Feedback submitted:', response.data);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white shadow-lg rounded-xl p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Share Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
            <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">
                Username
            </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                placeholder="Your name"
            />
            </div>

            <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email
            </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your email address"
            />
            </div>

            <div>
            <label htmlFor="feedbackText" className="block text-gray-700 text-sm font-medium mb-2">
                Feedback
            </label>
            <textarea
                id="feedbackText"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                rows="5"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us what's on your mind"
            ></textarea>
            </div>

            <div>
            <label htmlFor="category" className="block text-gray-700 text-sm font-medium mb-2">
                Category (Optional)
            </label>
            <div className="relative">
                <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                <option value="suggestion">Suggestion</option>
                <option value="bug report">Bug Report</option>
                <option value="feature request">Feature Request</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.25 7.5l4.25 4.25 4.25-4.25" />
                </svg>
                </div>
            </div>
            </div>

            <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            Submit Feedback
            </button>

            {submissionStatus === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
                Feedback submitted successfully!
            </div>
            )}
            {submissionStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
                Failed to submit feedback. Please try again.
            </div>
            )}
            {submissionStatus === 'submitting' && (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-md">
                Submitting your feedback...
            </div>
            )}
        </form>
    </div>

  );
};

export default FeedbackForm;