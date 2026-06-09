"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">
        Count: {count}
      </h1>

      <div className="mt-5 space-x-3">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increase
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrease
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}