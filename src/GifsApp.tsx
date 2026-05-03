
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import PreviousSearches from './gifs/components/PreviousSearches'
import GifsList from './gifs/components/GifsList'
import useGifs from './gifs/hooks/useGifs'

const GifsApp = () => {

   const {
        //values
        previousTerms,
        gifsSearched,

        //methods
        handleTermClicked,
        handleSearch
    } = useGifs();

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
                searches={previousTerms}
                onLabelClicked={handleTermClicked}    
            />

            {/* Gifs */}
           <GifsList gifs={gifsSearched}/>
        </div>
    )
}

export default GifsApp
