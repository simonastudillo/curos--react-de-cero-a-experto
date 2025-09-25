import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearchBar } from "./shared/components/CustomSearchBar"

export const GifsApp = () => {

   const [previousTerms, setPreviousTerms] = useState(['Gokú']);

   const handleTermClick = (term: string) => {
      console.log(term);
   }

   const handleSearch = (query: string) => {
      console.log(query);
   }

   return (
      <>
         <CustomHeader title="Buscador de Gifs" description="Descrubre y comparte el gif perfecto" />
         <CustomSearchBar
            placeholder="Busca lo que quieras"
            onQuery={handleSearch}
         />
         <PreviousSearches
            searches={previousTerms}
            onLabelClicked={handleTermClick}
         />

         < GifList gifs={mockGifs} />
      </>
   )
}
