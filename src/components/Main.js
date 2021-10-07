import React from 'react'
import Card from './Card'
import data from "../data/data.json"

const Main = () => {
    return (
        <section id="cardsContainer">
            {data.regions.map(regionCard=><Card key={regionCard.id} {...regionCard}></Card>)}
        </section>
    ) 
}
export default Main;