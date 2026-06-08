"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>
<div style={{ display: "flex", gap: "10px" }}>
  <button onClick={() => setCount(count + 1)}>
    Increase
  </button>

  <button onClick={() => setCount(count - 1)}>
    Decrease
  </button>

  <button onClick={() => setCount(0)}>
    Reset
  </button>
</div>

      <Footer />
    </div>
  );
}