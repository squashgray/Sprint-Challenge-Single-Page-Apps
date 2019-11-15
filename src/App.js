import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <main>
      <Header />

      <WelcomePage />

      <Route exact path="/CharacterList" component={CharacterList} />
    </main>
  );
}
