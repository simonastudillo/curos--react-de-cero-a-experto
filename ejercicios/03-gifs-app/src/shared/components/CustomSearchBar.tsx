import { useState, type KeyboardEvent } from "react";

interface CustomSearchBarProps {
   placeholder?: string;
   onQuery: (query: string) => void;
}

export const CustomSearchBar = ({ placeholder = 'Buscar', onQuery }: CustomSearchBarProps) => {

   const [query, setQuery] = useState('');

   const handleSearch = () => {
      onQuery(query);
      setQuery('');
   }

   const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         handleSearch();
      }
   }

   return (
      <div className="search-container">
         <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
         />
         <button onClick={handleSearch}>Buscar</button>
      </div>
   )
}
