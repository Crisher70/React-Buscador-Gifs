import React, { useState, type KeyboardEvent } from 'react'

interface Props {
  placeholder: string,
  onQuery: (query: string) => void;
}

const SearchdBar = ({placeholder = "Buscar", onQuery} : Props) => {
  
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onQuery(query);
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  }

  // Recordar: onChange es de javascript
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

export default SearchdBar
