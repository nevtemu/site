import Flag from './Flag.jsx';
import { Link} from "react-router-dom";
import data from "../data/data.json"

const Card = ({fullName, area, population, capital, numberOfDistricts, id, userLang}) => {
    const linkAddress = `/region/${id}`;
        return (
            <Link to={linkAddress}>
            <div className="p-2  border-2 flex flex-col" >
                <div className="flex flex-row">
                    <div className='flex-none'><Flag region={id} style={{width:100+'px'}}/></div>
                    <div className="text-center font-bold flex-grow">{fullName[userLang]}</div>
                </div>
                <div className="statistics">
                    <div>{data.headers.area[userLang]}: {area}</div>
                    <div>{data.headers.population[userLang]}: {population}</div>
                    <div>{data.headers.capital[userLang]}: {capital[userLang]}</div>
                    <div>{data.headers.districts[userLang]}: {numberOfDistricts}</div>
                </div>
            </div>
            </Link>
        )
}
export default Card;