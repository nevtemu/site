import Flag from './Flag.jsx';
import { Link} from "react-router-dom";
import data from "../data/data.json"

const List = ({fullName, capital, id, userLang}) => {
    const linkAddress = `/region/${id}`;
        return (
            <Link to={linkAddress}>
            <li className="p-2 border-2 flex flex-row">
                <div className="flex-none mr-2"><Flag region={id} style={{width:60+'px'}}/></div>
                <div className="flex flex-col">
                    <div className="text-center font-bold flex-grow">{fullName[userLang]}</div>
                    <div>{data.headers.capital[userLang]}: {capital[userLang]}</div>
                </div>
            </li>
            </Link>
        )
}
export default List;