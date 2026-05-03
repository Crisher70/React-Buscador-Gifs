import  { useRef, useState } from 'react'
import { getGifsByQuery } from '../actions/get-gifs-by-query.action'
import type { Gif } from '../interfaces/gif.response'

// para que no se setee a 0 se saca del renderizado del componente,esta es una forma de hacerlo
// const gifsCache: Record<string, Gif[]> = {};

const useGifs = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])
    const [gifsSearched, setGifsSearched] = useState<Gif[]>([])

    const gifsCache = useRef<Record<string, Gif[]>> ({});

    const handleTermClicked = async (term: string) => {
        if(gifsCache.current[term]){
            setGifsSearched(gifsCache.current[term])
            console.log(gifsCache);
            return;
        }

        const gifs = await getGifsByQuery(term)
        setGifsSearched(gifs)
        gifsCache.current[term] = gifs; 
        console.log(gifsCache);
        
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

        gifsCache.current[query] = gifs;    
    };

    return {
        //values
        previousTerms,
        gifsSearched,

        //methods
        handleTermClicked,
        handleSearch
    }
}

export default useGifs
