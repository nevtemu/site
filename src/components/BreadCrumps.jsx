import { Link, useLocation, useParams} from "react-router-dom";
import data from "../data/data.json"

export default function BreadCrumps ({layout}){
    let location = useLocation();
    let urlParams = useParams();
    let breadCrumps =<Link to="/"><span>Ukraine</span></Link>;
    breadCrumps+=<Link to="/"><span>{layout}</span></Link>;
    breadCrumps+=<Link to={location}><span>{layout}</span></Link>;
    const breadCrumpComponent =<>{breadCrumps}</>;
        return (
            <>
                {breadCrumpComponent}
            </>
        )
}