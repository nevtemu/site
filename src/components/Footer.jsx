import { connect, useSelector } from "react-redux";
import {ReactComponent as GitHub} from '../assets/social/github-brands.svg';
import {ReactComponent as Instagram} from '../assets/social/instagram-brands.svg';
import {ReactComponent as LinkedIn} from '../assets/social/linkedin-brands.svg';
import {ReactComponent as Reddit} from '../assets/social/reddit-brands.svg';
import {ReactComponent as Twitter} from '../assets/social/twitter-brands.svg';

const Footer = ({dispatch}) => {
    const language = useSelector(state => state.lang.language);
    return (
        <footer className="flex flex-row">
            <div className="">Artem Soroka</div>
            <nav className="ml-auto flex flex-row gap-2">
                <span className="">{`Hire me: `}</span> 
                <div className="w-5 h-5"><GitHub/></div> 
                <div className="w-5 h-5"><Instagram/></div> 
                <div className="w-5 h-5"><LinkedIn/></div> 
                <div className="w-5 h-5"><Reddit/></div> 
                <div className="w-5 h-5"><Twitter/></div> 
            </nav>
        </footer>
    ) 
}

export default connect()(Footer);