import { connect, useSelector } from "react-redux";
import Language from "./Language"

const Header = ({dispatch}) => {
    const browserLang = navigator.language || navigator.userLanguage;
    dispatch({type: browserLang})
    const userLang = useSelector(state => state.lang.language);
    return (
        <div className='flex gap-2'>
            <div>Menu</div>
            <div className="mr-5"><Language userLang={userLang}/></div>
        </div>
    ) 
}

export default connect()(Header);