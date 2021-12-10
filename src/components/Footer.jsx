import { connect, useSelector } from "react-redux";

const Footer = ({dispatch}) => {
    const language = useSelector(state => state.lang.language);
    return (
        <footer>
            <div className="">Artem Soroka</div>
        </footer>
    ) 
}

export default connect()(Footer);