import Card from './Card.jsx';
import data from "../data/data.json"

const Slider = () => {
        return (
            <>
            <div id="Slider">
                <section className="flex flex-row w-4/5 overflow-hidden ml-16 ">
                    {data.regions.map((regionCard,index)=><Card key={regionCard.id} {...regionCard} index={index}></Card>)}
                </section>
            </div>
            </>
        )
}
export default Slider;