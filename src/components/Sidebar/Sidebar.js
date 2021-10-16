import SidebarOption from "../SidebarOption/SidebarOption"
import "./Sidebar.css"

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateProviderValue } from "../../StateProvider";

function Sidebar() {
    const [{playlists}, dispatch] = useStateProviderValue()

    return(
        <div className="sidebar">
            <img className="sidebar__logo" src="spotify2019-830x350.jpg" alt="" />

            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>

            <br />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr/>

            {
                playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name} />
                ))
            }
        </div>
    )
}

export default Sidebar