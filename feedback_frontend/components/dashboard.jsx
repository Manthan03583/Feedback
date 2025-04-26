'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackDashboard = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortBy, setSortBy] = useState('timestamp');
  const [sortOrder, setSortOrder] = useState('desc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFeedback();
  }, [filterCategory, sortBy, sortOrder]);

  const fetchFeedback = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/feedback/', {
        params: {
          category: filterCategory || undefined,
          sortBy: sortBy || undefined,
          sortOrder: sortOrder || undefined,
        },
      });
      setFeedbackData(response.data);
    } catch (err) {
      console.error('Error fetching feedback:', err);
      setError('Failed to load feedback.');
      setFeedbackData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    const [field, order] = event.target.value.split(':');
    setSortBy(field);
    setSortOrder(order);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">User Feedback</h2>

    
    <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
        <label htmlFor="filterCategory" className="text-gray-700 text-sm font-medium">
            Filter:
        </label>
        <select
            id="filterCategory"
            value={filterCategory}
            onChange={handleFilterChange}
            className="border border-gray-300 rounded-lg py-2 px-3 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            <option value="">All Categories</option>
            <option value="suggestion">Suggestion</option>
            <option value="bug report">Bug Report</option>
            <option value="feature request">Feature Request</option>
        </select>
        </div>
        <div className="flex items-center space-x-2">
        <label htmlFor="sortBy" className="text-gray-700 text-sm font-medium">
            Sort by:
        </label>
        <select
            id="sortBy"
            value={`${sortBy}:${sortOrder}`}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-lg py-2 px-3 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            <option value="timestamp:desc">Newest</option>
            <option value="timestamp:asc">Oldest</option>
            <option value="username:asc">Username (A-Z)</option>
            <option value="username:desc">Username (Z-A)</option>
            <option value="email:asc">Email (A-Z)</option>
            <option value="email:desc">Email (Z-A)</option>
        </select>
        </div>
    </div>

    
    {feedbackData.length === 0 ? (
        <p className="text-gray-500 italic text-center">No feedback available at the moment.</p>
    ) : (
        <ul className="divide-y divide-gray-200">
        {feedbackData.map((feedback) => (
            <li
            key={feedback._id || feedback.id}
            className="py-6 px-4 hover:bg-gray-50 transition rounded-lg"
            >
            <div className="flex items-center justify-between">
                <div>
                <p className="text-lg font-medium text-gray-800">{feedback.username}</p>
                <p className="text-sm text-gray-500">{feedback.email}</p>
                </div>
                {feedback.category && (
                <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                    feedback.category === 'suggestion'
                        ? 'bg-blue-100 text-blue-800'
                        : feedback.category === 'bug report'
                        ? 'bg-red-100 text-red-800'
                        : feedback.category === 'feature request'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                >
                    {feedback.category.charAt(0).toUpperCase() + feedback.category.slice(1)}
                </span>
                )}
            </div>
            <p className="mt-3 text-gray-700">{feedback.feedbackText}</p>
            <p className="mt-2 text-xs text-gray-400">
                Submitted on {new Date(feedback.timestamp).toLocaleDateString()} at{' '}
                {new Date(feedback.timestamp).toLocaleTimeString()}
            </p>
            </li>
        ))}
        </ul>
    )}
    </div>

  );
};

export default FeedbackDashboard;