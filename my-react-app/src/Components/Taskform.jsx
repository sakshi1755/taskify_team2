import React, { useState } from 'react';
import './Taskform.css';

const TaskForm = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: '2',
    status: 'todo',
  });

  const closeForm = () => setIsVisible(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task created:', formData);
  };

  if (!isVisible) return null;

  return (
    <div className="task-form">
      <button className="close-btn" onClick={closeForm}>×</button>
      <h2>New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" value={formData.title} onChange={handleChange} required placeholder="Enter task title" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} required placeholder="Enter task description" />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select id="priority" value={formData.priority} onChange={handleChange} required>
            <option value="1">1 (High)</option>
            <option value="2">2 (Medium)</option>
            <option value="3">3 (Low)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status" value={formData.status} onChange={handleChange} required>
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={closeForm}>Cancel</button>
          <button type="submit" className="create-btn">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
