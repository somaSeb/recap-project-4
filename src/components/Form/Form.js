import "./Form.css";

export default function Form({ onAddActivity }) {
  return (
    <div>
      <header>Form</header>
      <form className="form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          <input type="checkbox" />
          ☀️
        </label>
        <input className="form__button" type="submit" value="Submit" />
      </form>
    </div>
  );
}
