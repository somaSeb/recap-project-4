import "./List.css";
import React from "react";

export default function List({ onActivities }) {
  return (
    <>
      <h1>List:</h1>
      <ul className="list">
        {onActivities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
