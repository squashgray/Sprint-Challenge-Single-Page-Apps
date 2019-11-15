import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const output = props.character.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setResults(output);
  }, [searchTerm]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      {results.map(data => (
        <CharacterCard
          name={data.name}
          image={data.image}
          species={data.species}
          gender={data.gender}
          status={data.status}
        />
      ))}
    </section>
  );
}
