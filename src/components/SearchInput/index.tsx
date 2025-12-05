import "./index.scss"
import search_icon from "../../assets/svg/search-icon.svg"
import { useSearch } from "../../context/searchContext";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
    const { searchQuery, setSearchQuery } = useSearch();
    const navigate = useNavigate();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchQuery(e.target.value)
    }

    function enterSearch(e: React.KeyboardEvent<HTMLInputElement>) {
        if(!searchQuery.trim()){
            return
        }
        if(e.key === 'Enter'){
            navigate('/')
        }
    }

    return (
        <div className="pesquisar">
            <img src={search_icon} alt="Search Icon" />
            <input type="text" placeholder="Search" value={searchQuery} onChange={handleChange} onKeyDown={enterSearch}/>
        </div>
    )
}