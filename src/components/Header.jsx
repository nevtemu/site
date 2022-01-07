import { connect, useSelector } from "react-redux";
import LightMode from "../assets/theme/Light";
import DarkMode from "../assets/theme/Dark";
import LanguageSelector from "./LanguageSelector"
import BreadCrumbs from "./BreadCrumbs"

const Header = ({dispatch}) => {
    const userThemeDark = useSelector(state => state.theme.darkTheme);
    let themeButtonComponent;
    themeButtonComponent = userThemeDark ? <LightMode/> : <DarkMode/>;
    const layout = useSelector(state => state.layout.layout);
    const userLang = useSelector(state => state.lang.language);
    return (
        <header>
            <nav className="flex flex-row shadow gap-2 py-2 sticky top-0 backdrop-filter backdrop-blur bg-opacity-50">
                <div className="ml-5 font-bold font-lg hover:text-lightHover dark:hover:text-darkHover" >Menu</div>
                <div className="w-6 ml-auto" onClick={e => dispatch({type: userThemeDark ? 'light-mode' : 'dark-mode'})}>{themeButtonComponent}</div>
                <LanguageSelector/> 
            </nav>
            <BreadCrumbs layout={layout} userLang={userLang}/>
        </header>

        
    ) 
}

export default connect()(Header);