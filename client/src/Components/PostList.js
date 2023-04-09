import React from "react";

const PostList = ({ posts, onEdit, onDelete, onLike, onUnlike }) => {
  return (
    <div className="container">
      <h2>Post List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Likes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>{post.likes}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={() => onEdit(post)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger mr-2"
                  onClick={() => onDelete(post.id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-success mr-2"
                  onClick={() => onLike(post.id)}
                >
                  Like
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => onUnlike(post.id)}
                >
                  Unlike
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;