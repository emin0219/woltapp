import { Link } from "react-router-dom"

function Cities() {
    return (
        <div className='citiesCont'>
            <Link to="/available" className="city">Helsinki</Link>

            <Link to="/tampere" className="city">Tampere</Link>

            <Link to="/turku" className="city">Turku</Link>
        </div>
    )
}

export default Cities