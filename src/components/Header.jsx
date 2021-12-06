import { connect, useSelector } from "react-redux";
import Language from "./Language"
import LightMode from "../assets/theme/Light";
import DarkMode from "../assets/theme/Dark";

const Header = ({dispatch}) => {
    //Language
    const userLang = useSelector(state => state.lang.language);
    //Color theme
    const userThemeDark = useSelector(state => state.theme.darkTheme);
    let themeButtonComponent;
    userThemeDark ? themeButtonComponent = <LightMode/> : themeButtonComponent = <DarkMode/>
    return (
        <div className='flex gap-2 mt-5 dark:bg-gray-500'>
            <div>Menu</div>
            <div className="mr-5"><Language userLang={userLang}/></div>
            <div className="w-6" onClick={e => dispatch({type: userThemeDark ? 'light-mode' : 'dark-mode'})}>{themeButtonComponent}</div>
        </div>
    ) 
}

export default connect()(Header);