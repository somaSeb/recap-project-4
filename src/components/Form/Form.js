import "./Form.css";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function Form({ onAddActivity }) {
  const [name, setName] = useState("");

  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    event.target.reset();
    console.log(data);
    event.target.querySelector("input[name='name']").focus();
  }

  return (
    <div>
      <header>Form</header>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          <input
            type="checkbox"
            name="isForGoodWeather"
            onChange={(event) => setIsForGoodWeather(event.target.checked)}
          />
          ☀️
        </label>

        <input className="form__button" type="submit" value="Submit" />
      </form>
    </div>
  );
}
