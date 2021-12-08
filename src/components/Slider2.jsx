import Slider from "react-slick";
import Card from './Card.jsx';

export default function SimpleSlider({items, userLang}) {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
        {items.map((regionCard,index)=><div><Card key={regionCard.id} {...regionCard} userLang={userLang} index={index}></Card></div>)}
    </Slider>
  );
}