import { useEffect, useState, type KeyboardEvent } from 'react'

interface Props {
  placeholder: string,
  onQuery: (query: string) => void;
}

const SearchdBar = ({placeholder = "Buscar", onQuery} : Props) => {
  
  const [query, setQuery] = useState('')

  // se dispara cuando se renderza el componente, es comun ver que se usa para hacer peticiones
  // en ese caso es como el mounted, ejecutando cosas despues de que renderiza el componente
  useEffect(() => {
    const timeoutId = setTimeout (() => {
      onQuery(query);
    }, 700)

    return () => {
      clearTimeout(timeoutId);
    }
  }, [query, onQuery])

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
