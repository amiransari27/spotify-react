import Header from "../Header/Header"
import "./Body.css"

function Body({spotify}){ 
    return (
        <div className="body">
            <Header spotify={spotify} />
        </div>
    )
}

export default Body