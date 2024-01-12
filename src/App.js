import "./App.css";
import Form from "./components/Form/Form";
import React from "react";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    const newActivityWithId = {
      ...newActivity,
      id: Math.random().toString(36).substring(7),
    };
    setActivities((previousActivities) => [
      ...previousActivities,
      newActivityWithId,
    ]);
    console.log("ID test", newActivityWithId);
  }

  // setActivitiesetEntries([{ id: uid(), date, ...newActkvk}, ...entries]);

  return (
    <>
      <h1>Weather App</h1>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
