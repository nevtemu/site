import data from "../data/data.json"

export default function MapControls () {
    const raions =[], populations=[], areas=[];
    data.regions.map(item => {raions.push(item.numberOfDistricts); populations.push(item.population); areas.push(item.area)})
    const raionsMin = Math.min(...raions);
    const raionsMax = Math.max(...raions);
    const areaMin = Math.min(...areas);
    const areaMax = Math.max(...areas);
    const populationMin = Math.min(...populations);
    const populationMax = Math.max(...populations);
    return (
        <div className="flex flex-column gap-2">
            <span>Raions</span><input type="range" min={raionsMin} max={raionsMax} value={raionsMax} className="slider" id="rangeRaions"/>
            <span>Area</span><input type="range" min={areaMin} max={areaMax} value={areaMax} className="slider" id="rangeAreas"/>
            <span>Population</span><input type="range" min={populationMin} max={populationMax} value={populationMax} className="slider" id="rangePopulations"/>
        </div>
    );
}



