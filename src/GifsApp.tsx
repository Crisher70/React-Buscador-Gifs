import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import PreviousSearches from './gifs/components/PreviousSearches'
import GifsList from './gifs/components/GifsList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.response'

const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])

    const [gifsSearched, setGifsSearched] = useState<Gif[]>([])

    const handleTermClicked = (term: string) => {
        console.log({term})
    }

    const handleSearch = async (query: string) => {
         query = query.toLowerCase().trim()
        
        if(query.length === 0) return;
    
        if(previousTerms.includes(query)) return;
    
        // const currentTerms = previousTerms.slice(0,6);
        // currentTerms.unshift(query);
        setPreviousTerms([query, ...previousTerms].splice(0,7))
        
        const gifs = await getGifsByQuery(query)
        setGifsSearched(gifs)

        // console.log(gifs);
        
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
           <GifsList gifs={gifsSearched}/>
        </div>
    )
}

export default GifsApp
