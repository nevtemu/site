import { connect, useSelector } from "react-redux";
import LightMode from "../assets/theme/Light";
import DarkMode from "../assets/theme/Dark";
import LanguageSelector from "./LanguageSelector"

const Header = ({dispatch}) => {
    const userThemeDark = useSelector(state => state.theme.darkTheme);
    let themeButtonComponent;
    userThemeDark ? themeButtonComponent = <LightMode/> : themeButtonComponent = <DarkMode/>
    return (
        <div className='flex gap-2 mt-5 dark:bg-gray-500'>
            <div className="relative mr-5" >Menu</div>
            <LanguageSelector/>                
            <div className="w-6" onClick={e => dispatch({type: userThemeDark ? 'light-mode' : 'dark-mode'})}>{themeButtonComponent}</div>
        </div>
    ) 
}

export default connect()(Header);