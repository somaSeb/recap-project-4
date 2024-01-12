import "./App.css";
import Form from "./components/Form/Form";
import React from "react";
import { uid } from "uid";
import { useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    const newActivityWithId = { ...newActivity, id: uid() };
    setActivities((previousActivities) => [
      ...previousActivities,
      newActivityWithId,
    ]);
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
