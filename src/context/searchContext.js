
import { useState, createContext} from "react";


const SearchContext = createContext();

function SearchProvider({children}) {
    
    const [searchInput, setSearchInput] = useState('');

    const value = {
        searchInput,
        setSearchInput
    }

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );

}


export { SearchContext, SearchProvider};