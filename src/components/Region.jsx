import Flag from './Flag.jsx';
import Map from "./Map"
import data from '../data/data.json'
import multilang from '../data/multilang.json'
import { connect, useSelector } from "react-redux";
import { Link, useParams} from "react-router-dom";

const Region = ({dispatch}) => {
    const userLang = useSelector(state => state.lang.language);
    const { regionID } = useParams()
    let {area, population, id, capital, numberOfDistricts, fullName} = data.regions.find(region => region.id === regionID);
        return (
            <div className="p-6 flex flex-col">
                <Flag region={id} style={{width:400+'px'}}/>
                <Map region={id} clickMode={false} style={{width:400+'px'}}/>
                <div className="statistics">
                    <div className="font-bold flex-grow">{fullName[userLang]}</div>
                    <div>{data.headers.area[userLang]}: {area}</div>
                    <div>{data.headers.population[userLang]}: {population}</div>
                    <div>{data.headers.capital[userLang]}: {capital[userLang]}</div>
                    <div>{data.headers.districts[userLang]}: {numberOfDistricts}</div>
                </div>
                <Link to='/'><button>{multilang.controls.back[userLang]}</button></Link>
            </div>
        )
}
export default connect()(Region);