import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  if (!search) return;

  fetch(`https://dummyjson.com/users/search?q=${search}`)
    .then(res => res.json())
    .then(result => setUsers(result.users));
}, [search]);


  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
