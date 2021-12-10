import Card from './Card'
import List from './List'
import Slider from './Slider2'
import Table from './Table'
import data from "../data/data.json"
import Map from "./Map"
import { connect, useSelector } from "react-redux";
import {ReactComponent as ListLayout} from '../assets/layout/list.svg';
import {ReactComponent as CardsLayout} from '../assets/layout/cards.svg';
import {ReactComponent as MapLayout} from '../assets/layout/map.svg';
import {ReactComponent as TableLayout} from '../assets/layout/table.svg';
import {ReactComponent as SliderLayout} from '../assets/layout/slider.svg';

const Main = ({dispatch}) => {
    const layout = useSelector(state => state.layout.layout);
    const userLang = useSelector(state => state.lang.language);
    let layoutComponent;
    switch(layout){
        case 'map': layoutComponent = <Map clickMode={true} style={{width:800+'px'}}/>; break;
        case 'table': layoutComponent = <Table data={data} userLang={userLang}/>; break;
        case 'list': layoutComponent = <ul id="listContainer" className="flex flex-col gap-1 mb-4">{data.regions.map(listLine=><List key={listLine.id} {...listLine} userLang={userLang}></List>)}</ul>; break;
        case 'cards': layoutComponent = <section id="cardsContainer" className="grid grid-cols-equal gap-1 mb-4">{data.regions.map(regionCard=><Card key={regionCard.id} {...regionCard} userLang={userLang}></Card>)}</section>; break;
        case 'slider': layoutComponent =<Slider items={data.regions} userLang={userLang}/>; break;
        default: layoutComponent=<div>Something went wrong!</div>
    }
    return (
        <main className="mx-5">
        <div className="flex flex-row gap-1">


            <div id="layout-map" className="w-12 h-9" onClick={e => dispatch({type: 'map'})}><MapLayout/></div>
            <div id="layout-cards" className="w-12 h-9" onClick={e => dispatch({type: 'cards'})}><CardsLayout/></div>
            <div id="layout-slider" className="w-12 h-9" onClick={e => dispatch({type: 'slider'})}><SliderLayout/></div>
            <div id="layout-table" className="w-12 h-9" onClick={e => dispatch({type: 'table'})}><TableLayout/></div>
            <div id="layout-list" className="w-12 h-9" onClick={e => dispatch({type: 'list'})}><ListLayout/></div>
        </div>
        {layoutComponent}
        </main>
    ) 
}

export default connect()(Main);