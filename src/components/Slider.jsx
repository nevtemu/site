import Card from './Card.jsx';

const Slider = ({items, userLang}) => {
        return (
            <>
            <div id="Slider">
                <section className="flex flex-row w-4/5 overflow-hidden ml-16 ">
                    {items.map((regionCard,index)=><Card key={regionCard.id} {...regionCard} userLang={userLang} index={index}></Card>)}
                </section>
            </div>
            </>
        )
}
export default Slider;