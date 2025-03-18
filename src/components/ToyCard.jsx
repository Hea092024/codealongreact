import React from "react";

export default function ToyCard({ toy }) {
  return (
    <div className="toy-card">
      <h2>{toy.name}</h2>
      <p>{toy.description}</p>
      <p>
        <strong>{toy.price}</strong>
      </p>
    </div>
  );
}
