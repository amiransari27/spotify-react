import "./Header.css"

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import { useStateProviderValue } from "../../StateProvider";

function Header({spotify}){ 

    const [{user}, dispatch] = useStateProviderValue()

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />

                <input 
                    placeholder="Search for Artist, Songs, "
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src="" alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header