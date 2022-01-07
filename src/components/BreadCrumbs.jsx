import { Link, useLocation, useParams} from "react-router-dom";
import data from "../data/data.json"
import multilang from "../data/multilang.json"
import uuid from 'react-uuid'

export default function BreadCrumbs ({layout, userLang}){
    const location = useLocation();
    const urlParams = useParams();
    let crumbsPath = location.pathname;
    let breadCrumbs =[];
    do{
        let stepPath = crumbsPath;
        let stepName = crumbsPath.split( '/' ).pop();
        if (stepName === 'region'){stepName = multilang.layouts[layout][userLang]}
        else if (data.regions.find(region => region.id === stepName)){stepName = data.regions.find(region => region.id === stepName).fullName[userLang]}
        else if (stepName === '' || '/'){stepName = multilang.locations.main[userLang]}
        breadCrumbs.push({stepName, stepPath})
        crumbsPath = crumbsPath.split( '/' ).slice( 0, -1 ).join( '/' );
    }
    while(crumbsPath.length>0)
    if (location.pathname != '/'){breadCrumbs.push({ stepName: multilang.locations.main[userLang], stepPath:"/"})}
    return (
        <nav id="breadcrumbs" className="">
            <span id="breadCrumbsOpener" className="ml-5">C:</span>
            {breadCrumbs.map(level=><Link key={uuid()} to={level.stepPath}> \ <span className="cursor-pointer hover:text-blue-800">{level.stepName}</span></Link>)}
            <span id="breadCrumbsCloser">{` > `}</span>
            <span id="breadCrumbsPointer" className="animate-ping z-0">{`|`}</span>
        </nav>
    )
}