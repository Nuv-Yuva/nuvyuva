import React from 'react'
import {Carousel} from '3d-react-carousal';
import "./Event.css"

const Events = () => {
    let slides = [
        <a href="/technical"><img className='events-img' src="https://i.pinimg.com/originals/9d/44/d3/9d44d3950a253bd31a1bec6bf1499ee5.jpg" alt="Technical Events" /></a>,
        <a href="/workshop"><img className='events-img' src="https://wallpaper.dog/large/20493047.jpg" alt="Workshops" /></a>  ,
        <a href="/gaming"><img className='events-img' src="https://i.pinimg.com/originals/22/c7/d8/22c7d88541c21b58f86998278ff21dae.png" alt="Gaming Events" /></a>  ,
        <a href="/cultural"><img className='events-img' src="https://wallpapercave.com/wp/wp2722822.jpg" alt="Cultural Events" /> </a> ,
        <a href="/sports"><img className='events-img' src="https://media.istockphoto.com/photos/blue-colored-defocused-pattern-picture-id183240639?k=20&m=183240639&s=612x612&w=0&h=mSCkYf03BKtdBbp9IoOMFhtYTwSVKkRmGDKWgjk5H6s=" alt="Sports Events" /> </a>  ];
    
const callback = function(index){
  console.log("callback",index);
}
  return (
    <div className='events'>
        <div className="event-heading">
            EVENTS
        </div>        
        <div className="events-cards">
        <Carousel slides={slides} autoplay={true} interval={2000} arrows={true} onSlideChange={callback}/>
        </div>
    </div>
  )
}

export default Events