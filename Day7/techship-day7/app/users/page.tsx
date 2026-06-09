"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-black-700 mb-8">
        User Data from API
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-green-400 p-5 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-black">
              {user.name}
            </h2>

            <p className="text-black mt-2">
              <strong>Email:</strong> {user.email}
            </p>

            <p className="text-black mt-2">
              <strong>Company:</strong> {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}