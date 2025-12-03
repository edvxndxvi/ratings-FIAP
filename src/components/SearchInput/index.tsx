import "./index.scss"
import search_icon from "../../assets/svg/search-icon.svg"
import React from 'react';

interface SearchInputProps {
    onSearchChange: (query: string) => void
}

export default function SearchInput({onSearchChange} : SearchInputProps) {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onSearchChange(e.target.value)
    }

    return (
        <div className="pesquisar">
            <img src={search_icon} alt="Search Icon" />
            <input type="text" placeholder="Search" onChange={handleChange}/>
        </div>
    )
}