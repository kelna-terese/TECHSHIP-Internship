"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Welcome() {
  const [name, setName] = useState("");

  return (
    <div>
      <Header />

      <h1>Dynamic Welcome Message</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Welcome, {name}!</h2>

      <Footer />
    </div>
  );
}