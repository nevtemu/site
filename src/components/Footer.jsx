import { connect, useSelector } from "react-redux";

const Footer = ({dispatch}) => {
    const language = useSelector(state => state.lang.language);
    return (
        <>
            <div>Artem Soroka</div>
        </>
    ) 
}

export default connect()(Footer);