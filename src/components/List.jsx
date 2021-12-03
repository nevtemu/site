import Flag from './Flag.jsx';
import { Link} from "react-router-dom";

const List = ({fullName, capital, id}) => {
    const linkAddress = `/region/${id}`;
        return (
            <Link to={linkAddress}>
            <li className="region-container" className="p-2 border-black border-2 flex flex-row">
                <div className="flex-none mr-2"><Flag region={id} style={{width:60+'px'}}/></div>
                <div className="flex flex-col">
                    <div className="text-center font-bold flex-grow">{fullName.EN}</div>
                    <div>Capital: {capital}</div>
                </div>
            </li>
            </Link>
        )
}
export default List;