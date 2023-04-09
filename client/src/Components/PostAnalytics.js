import React, { useState, useEffect } from "react";
import axios from "axios";

const PostAnalytics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);
  const [topLikedPosts, setTopLikedPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/analytics/posts")
      .then((res) => {
        setTotalPosts(res.data.totalPosts);
        setTopLikedPosts(res.data.topLikedPosts);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Post Analytics</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <p>Total Posts: {totalPosts}</p>
          <ul>
            {topLikedPosts.map((post) => (
              <li key={post.id}>
                {post.title} - {post.content} ({post.likes} likes)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostAnalytics;