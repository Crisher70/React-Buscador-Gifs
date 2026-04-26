import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import PreviousSearches from './gifs/components/PreviousSearches'
import GifsList from './gifs/components/GifsList'

const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])

    const handleTermClicked = (term: string) => {
        console.log({term})
    }

    const handleSearch = (query: string) => {
        console.log({query});
        
    };

    return (
        <div>
            {/* Header */}
            <CustomHeader 
                title="Buscador de Gifs"
                descripcion="Descubre y comparte el gif perfecto"
            />

            {/* search */}
            <SearchBar 
                placeholder="Busca lo que quieras"
                onQuery={handleSearch}
            />

            {/* Busquedas previas */}
            {/* PreviousSearches */}
            <PreviousSearches 
                searches={['Goku', 'Dragon Ball Z']}
                onLabelClicked={handleTermClicked}    
            />

            {/* Gifs */}
           <GifsList gifs={mockGifs}/>
        </div>
    )
}

export default GifsApp
