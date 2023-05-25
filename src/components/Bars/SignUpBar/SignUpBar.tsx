import React, { useState } from 'react';
import { Input, Button } from './styles';

interface SignUpBarProps {
  onSearch: (query: string) => void;
}

const SignUpBar: React.FC<SignUpBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="e-mail" type="text" value={query} onChange={handleChange} />
      <Button type="submit"><strong>Inscreva-se</strong></Button>
    </form>
  );
};

export default SignUpBar;
