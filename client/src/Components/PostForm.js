import React, { useState } from 'react';

const PostForm = ({ onSavePost }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSavePost(post);
    setPost({ title: '', body: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Post</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          name="body"
          value={post.body}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;