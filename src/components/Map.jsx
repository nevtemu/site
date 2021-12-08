import Ukraine from "./maps/Ukraine.jsx"
import UkraineNoLinks from "./maps/UkraineNoLinks.jsx"


function Map (props) {
    const style = props.style;
    let mapComponent;
    mapComponent = props.clickMode ? <Ukraine/> : <UkraineNoLinks region={props.region}/>
    return (
      <div className="map" style={style}>
        {mapComponent}
      </div>
    );
}

export default Map;