import React from "react";

const Profile = () => {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    if (user) {
      fetch("https://dummyjson.com/users/1")
        .then(res => res.json())
        .then(data => setUser(data));
    }
  }, []); // ❌ BUG

  return (
    <div>
      <h1>User Profile</h1>
      {user && <p>{user.firstName}</p>}
    </div>
  );
};

export default Profile;
