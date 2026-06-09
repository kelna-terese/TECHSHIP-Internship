"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserSearchPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-black-700 mb-6">
        User Search Feature
      </h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md border p-3 rounded mb-6 text-black"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-blue-100 p-4 rounded-lg shadow"
          >
            <h2 className="text-xl font-bold text-black">
              {user.name}
            </h2>

            <p className="text-black">
              {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}