import React, { useState, useEffect } from "react";
import axios from "axios";

const UserAnalytics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [topActiveUsers, setTopActiveUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/analytics/users")
      .then((res) => {
        setTotalUsers(res.data.totalUsers);
        setTopActiveUsers(res.data.topActiveUsers);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>User Analytics</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          <p>Total Users: {totalUsers}</p>
          <ul>
            {topActiveUsers.map((user) => (
              <li key={user.id}>
                {user.firstName} {user.lastName} ({user.postCount} posts)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAnalytics;