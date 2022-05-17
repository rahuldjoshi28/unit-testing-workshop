import React, { useState } from "react";
import { findMatchingMovies } from "../../services/movie";
import { Select } from "antd";

const { Option } = Select;

export function MovieSelector({ onSelect }) {
  const [matchingMovies, setMatchingMovies] = useState([]);

  const onMovieSearch = async (searchTerm) => {
    const newVar = await findMatchingMovies(searchTerm);
    setMatchingMovies(newVar);
  };

  return (
    <Select
      data-testid="movie-select"
      onSelect={onSelect}
      onSearch={onMovieSearch}
      showSearch
      filterOption={false}
    >
      {matchingMovies.map(({ id, name }) => {
        return (
          <Option key={id} value={id}>
            {name}
          </Option>
        );
      })}
    </Select>
  );
}
