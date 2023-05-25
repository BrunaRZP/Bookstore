import React, { useState } from 'react';
import { Form, Img, Input } from "./styles";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <a href="#"><Img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></Img></a>
      <Input placeholder="Search" type="text" value={query} onChange={handleChange} />
      {/* <button type="submit">Pesquisar</button> */}
    </Form>
  );
};

export default SearchBar;
