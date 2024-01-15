import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import React from "react";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

function App() {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function startFetching() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weather = await response.json();

      setWeather(weather);
    }
    startFetching();
  }, []);

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  // Filter the activities for those whose key isForGoodWeather is equal to
  // the global isGoodWeather variable.

  const goodWeatherActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === weather.isGoodWeather;
  });

  // Instead of all activities, pass the filtered activities to the List component.

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
      <h1>
        {weather.condition} {weather.temperature} °C
      </h1>
      <List
        activities={goodWeatherActivities}
        isGoodWeather={weather.isGoodWeather}
        onActivities={activities}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;

// onActivities={activities}
// ongoodWeatherActivities={goodWeatherActivities}
