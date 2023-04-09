import React, { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./Components/UserForm";
import PostForm from "./Components/PostForm";
import UserList from "./Components/UserList";
import PostList from "./Components/PostList";
import UserAnalytics from "./Components/UserAnalytics";
import PostAnalytics from "./Components/PostAnalytics";


const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleUserSubmit = async (formData) => {
    try {
      if (user) {
        await axios.put(`/users/${user.id}`, formData);
        setUser(null);
      } else {
        await axios.post("/users", formData);
      }
      const res = await axios.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostSubmit = async (formData) => {
    try {
      if (post) {
        await axios.put(`/posts/${post.id}`, formData);
        setPost(null);
      } else {
        await axios.post("/posts", formData);
      }
      const res = await axios.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserDelete = async (userId) => {
    try {
      await axios.delete(`/users/${userId}`);
      const res = await axios.get("/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostDelete = async (postId) => {
    try {
      await axios.delete(`/posts/${postId}`);
      const res = await axios.get("/posts");
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/posts");
        setPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#user-form">
                Add User
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#post-form">
                Add Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#user-list">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#post-list">
                Posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#user-analytics">
                User Analytics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#post-analytics">
                Post Analytics
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <UserForm onSubmit={handleUserSubmit} user={user} />
      <PostForm onSubmit={handlePostSubmit} post={post} />
      <UserList
        users={users}
        onEdit={(user) => setUser(user)}
        onDelete={handleUserDelete}
      />
      <PostList
        posts={posts}
        onEdit={(post) => setPost(post)}
        onDelete={handlePostDelete}
      />
      <UserAnalytics users={users} />
      <PostAnalytics posts={posts} />
    </div>
  );
};

export default App;





