import { connect, useSelector } from "react-redux";
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Slider, { SliderTooltip } from 'rc-slider';
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

function MapControls ({dispatch}) {
    let rangeParams = useSelector(state => state.map);
    return (
        <div className="flex flex-column gap-2">
          
           
    <div className="w-60 mr-5 flex flex-col"> 
    <span>Raions</span>
      <Range min={rangeParams.raionsMin} max={rangeParams.raionsMax} dots  defaultValue={[rangeParams.raionsMin, rangeParams.raionsMax]} tipFormatter={value => `${value}`} pushable draggableTrack onChange={e => dispatch(({type: 'highlightRaions', payload: e}))} />
    </div>
    <div className="w-60 mr-5 flex flex-col"> 
    <span>Area</span>
      <Range min={rangeParams.areaMin} max={rangeParams.areaMax} defaultValue={[rangeParams.areaMin, rangeParams.areaMax]} tipFormatter={value => `${value}km`} draggableTrack pushable allowCross={true} onChange={e => dispatch(({type: 'highlightArea', payload: e}))}/>
    </div>
    <div className="w-60 mr-5 flex flex-col"> 
    <span>Population</span>
      <Range min={rangeParams.populationMin} max={rangeParams.populationMax} defaultValue={[rangeParams.populationMin, rangeParams.populationMax]} tipFormatter={value => `${value} kk`} pushable draggableTrack onChange={e => dispatch(({type: 'highlightPopulation', payload: e}))} />
    </div>


        </div>
    );
}
export default connect()(MapControls)