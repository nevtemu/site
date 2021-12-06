import Flag from './Flag.jsx';
import Map from "./Map"
import data from '../data/data.json'

import { Link, useParams} from "react-router-dom";
const Region = () => {
    const { regionID } = useParams()
    let {area, population, id, capital, numberOfDistricts, fullName} = data.regions.find(region => region.id === regionID);
        return (
            <div className="p-6 flex flex-col">
                <Flag region={id} style={{width:400+'px'}}/>
                <Map region={id} clickMode={false} style={{width:400+'px'}}/>
                <div className="statistics">
                    <div className="font-bold flex-grow">{fullName.EN}</div>
                    <div>Area: {area}</div>
                    <div>Population: {population}</div>
                    <div>Capital: {capital.EN}</div>
                    <div>Number of raions: {numberOfDistricts}</div>
                </div>
                <Link to='/'><button>Back</button></Link>
            </div>
        )
}
export default Region;