import "./index.scss"
import search_icon from "../../assets/svg/search-icon.svg"
import { useSearch } from "../../context/searchContext";


export default function SearchInput() {
    const { searchQuery, setSearchQuery } = useSearch();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchQuery(e.target.value)
    }

    return (
        <div className="pesquisar">
            <img src={search_icon} alt="Search Icon" />
            <input type="text" placeholder="Search" value={searchQuery} onChange={handleChange}/>
        </div>
    )
}