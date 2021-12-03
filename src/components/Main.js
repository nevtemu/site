import React from 'react'
import Card from './Card'
import List from './List'
import Slider from './Slider'
import Table from './Table'
import data from "../data/data.json"
import Map from "./Map"
import { connect, useSelector } from "react-redux";
import "./maps/ukraine.css"

const Main = ({dispatch}) => {
    const layout = useSelector(state => state.layout.layout);
    console.log(layout)
    const userLang = navigator.language || navigator.userLanguage
    let layoutComponent;
    switch(layout){
        case 'map': layoutComponent = <Map clickMode={true} style={{width:800+'px'}}/>; break;
        case 'table': layoutComponent = <Table data={data}/>; break;
        case 'list': layoutComponent = <ul id="listContainer" className="flex flex-col gap-1 mb-4">{data.regions.map(listLine=><List key={listLine.id} {...listLine}></List>)}</ul>; break;
        case 'cards': layoutComponent = <section id="cardsContainer" className="grid grid-cols-equal gap-1 mb-4">{data.regions.map(regionCard=><Card key={regionCard.id} {...regionCard}></Card>)}</section>; break;
        case 'slider': layoutComponent =<Slider items={data.regions}/>; break;
        default: layoutComponent=<div>Something went wrong!</div>
    }
    return (
        <>
        <div className="flex">
        <div>{userLang}</div>
            <div id="layout-map" title="map" className="w-8 h-8 bg-gray-500 border-2 border-red-700" onClick={e => dispatch({type: e.target.title})}></div>
            <div id="layout-cards" title="cards" className="w-8 h-8 bg-gray-500 border-2 border-red-700" onClick={e => dispatch({type: e.target.title})}></div>
            <div id="layout-slider" title="slider" className="w-8 h-8 bg-gray-500 border-2 border-red-700" onClick={e => dispatch({type: e.target.title})}></div>
            <div id="layout-table" title="table" className="w-8 h-8 bg-gray-500 border-2 border-red-700" onClick={e => dispatch({type: e.target.title})}></div>
            <div id="layout-list" title="list" className="w-8 h-8 bg-gray-500 border-2 border-red-700" onClick={e => dispatch({type: e.target.title})}></div>
        </div>
        {layoutComponent}
        </>
    ) 
}

export default connect()(Main);