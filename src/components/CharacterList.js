import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const List = styled.section`
  margin: 0 auto;
`;

const Person = styled.div`
  margin: 0 auto;
  width: 50%;
  text-align: center;
  margin-top: 20px;
  background: green;
  padding-bottom: 20px;
  border-radius: 20px;
`;

const Info = styled.h3`
  margin-bottom: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Name = styled.h2`
  margin-bottom: 10px;
  font-family: "Courier New", Courier, monospace;
  font-size: 40px;
`;

const Image = styled.img`
  border-radius: 20px;
  margin-top: 40px;
`;

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <SearchForm character={character} />
      <List className="character-list">
        {character.map(data => (
          <Person key={data.id}>
            <Image src={data.image} alt="character portrait" />
            <Name>{data.name}</Name>
            <Info> {data.species}</Info>
            <Info> {data.gender}</Info>
            <Info> {data.status}</Info>
          </Person>
        ))}
      </List>
    </div>
  );
}
