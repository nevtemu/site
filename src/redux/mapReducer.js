import data from "../data/data.json"
let raions =[], populations=[], areas=[];
data.regions.map(item => {raions.push(item.numberOfDistricts); populations.push(item.population); areas.push(item.area)})
populations = populations.map(regionPopulation => regionPopulation/100000)
areas = areas.map(regionArea => regionArea/1000)
const raionsMin = Math.min(...raions);
const raionsMax = Math.max(...raions);
const areaMin = Math.floor(Math.min(...areas));
const areaMax = Math.ceil(Math.max(...areas));
const populationMin = Math.floor(Math.min(...populations));
const populationMax = Math.ceil(Math.max(...populations));

const raionsHighlightMin = raionsMin;
const raionsHighlightMax = raionsMax;
const areaHighlightMin = areaMin;
const areaHighlightMax = areaMax;
const populationHighlightMin = populationMin;
const populationHighlightMax = populationMax;

const initialState = {raionsMin, raionsMax, areaMin, areaMax, populationMin, populationMax, raionsHighlightMin, raionsHighlightMax, areaHighlightMin, areaHighlightMax, populationHighlightMin, populationHighlightMax};

export default function mapReducer (state = initialState, action) {
    switch (action.type) {
        case 'highlightRaions': {
            return {...state,raionsHighlightMin: action.payload[0], raionsHighlightMax: action.payload[1]}
        }
        case 'highlightArea': {
            return {...state,areaHighlightMin: action.payload[0], areaHighlightMax: action.payload[1]}
        } 
        case 'highlightPopulation': {
            return {...state,populationHighlightMin: action.payload[0], populationHighlightMax: action.payload[1]}
        }
        default:
        return state
    }
}