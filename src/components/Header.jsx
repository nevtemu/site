import { connect, useSelector } from "react-redux";
import LightMode from "../assets/theme/Light";
import DarkMode from "../assets/theme/Dark";
import LanguageSelector from "./LanguageSelector"

const Header = ({dispatch}) => {
    const userThemeDark = useSelector(state => state.theme.darkTheme);
    let themeButtonComponent;
    themeButtonComponent = userThemeDark ? <LightMode/> : <DarkMode/>
    return (
        <header className="flex flex-row shadow gap-2 py-2 sticky top-0 backdrop-filter backdrop-blur bg-opacity-50">
            <div className="ml-5 font-bold font-lg hover:text-lightHover dark:hover:text-darkHover" >Menu</div>
            <div className="w-6 ml-auto" onClick={e => dispatch({type: userThemeDark ? 'light-mode' : 'dark-mode'})}>{themeButtonComponent}</div>
            <LanguageSelector/> 
        </header>
    ) 
}

export default connect()(Header);