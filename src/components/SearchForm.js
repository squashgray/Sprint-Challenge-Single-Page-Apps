import React from "react";

export default function SearchForm() {
  return (
    <section className="search-form">
      <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the model get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the model. */}
        <label htmlFor="name">Search:</label>
        <input id="name" type="text" name="textfield" placeholder="Search" />
      </form>
    </section>
  );
}
