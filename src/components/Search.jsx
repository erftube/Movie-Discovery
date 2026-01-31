import React from "react";

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div className="min-h-6">
                <img src="./search.svg" alt="search" />
                <input 
                    type="text"
                    placeholder="Search through thousands of movies"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                
                />
            </div>
        </div>
        // <div className="text-white text-3xl">{searchTerm}</div>
    )
}

export default Search