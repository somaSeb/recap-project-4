import "./List.css";
import React from "react";

export default function List({ onActivities, goodWeatherActivities }) {
  return (
    <>
      <h1>
        {goodWeatherActivities
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h1>
      <ul>
        {onActivities.map((activity) => (
          <li key={activity.id}>
            {activity.name} -
            {activity.isForGoodWeather ? " Good Weather" : " Bad Weather"}
          </li>
        ))}
      </ul>
    </>
  );
}

{
  /* <ul className="list">
{onActivities.map((activity) => (
  <li key={activity.id}>{activity.name}></li>
))}
</ul> */
}
