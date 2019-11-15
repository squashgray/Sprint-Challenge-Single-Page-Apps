import React from "react";
import CharacterList from "./CharacterList";
import { Route, Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <SearchForm />

        <h2>
          <Link to="/CharacterList">Character List</Link>
        </h2>
      </header>
      <Route exact path="/CharacterList" component={CharacterList} />
    </section>
  );
}
