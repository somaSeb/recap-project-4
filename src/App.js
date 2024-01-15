import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import React from "react";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {
  // const [activities, setActivities] = useState([]);

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity, isForGoodWeather) {
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
      <List onActivities={activities}>activities</List>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
