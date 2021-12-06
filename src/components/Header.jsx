import { connect, useSelector } from "react-redux";
import Language from "./Language"
import LightMode from "../assets/theme/Light";
import DarkMode from "../assets/theme/Dark";

const Header = ({dispatch}) => {
    //Language
    const browserLang = navigator.language || navigator.userLanguage;
    dispatch({type: browserLang})
    const userLang = useSelector(state => state.lang.language);
    //Color theme
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (userPrefersLight){dispatch({type: 'light-mode'})}
    const userThemeDark = useSelector(state => state.theme.darkTheme);
    let themeButtonComponent;
    userThemeDark ? themeButtonComponent = <LightMode/> : themeButtonComponent = <DarkMode/>

    return (
        <div className='flex gap-2 mt-5'>
            <div>Menu</div>
            <div className="mr-5"><Language userLang={userLang}/></div>
            <div className="w-6" onClick={e => dispatch({type: userThemeDark ? 'light-mode' : 'dark-mode'})}>{themeButtonComponent}</div>
        </div>
    ) 
}

export default connect()(Header);