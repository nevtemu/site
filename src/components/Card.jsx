import Flag from './Flag.jsx';
import { Link} from "react-router-dom";

const Card = ({fullName, area, population, capital, numberOfDistricts, id, index}) => {
    const linkAddress = `/region/${id}`;
        return (
            <Link to={linkAddress}>
            <div className="p-2 border-black border-2 flex flex-col" id={"card"+index}>
                <div className="flex flex-row">
                    <div className='flex-none'><Flag region={id} style={{width:100+'px'}}/></div>
                    <div className="text-center font-bold flex-grow">{fullName.EN}</div>
                </div>
                <div className="statistics">
                    <div>Area: {area}</div>
                    <div>Population: {population}</div>
                    <div>Capital: {capital.EN}</div>
                    <div>Number of raions: {numberOfDistricts}</div>
                </div>
            </div>
            </Link>
        )
}
export default Card;