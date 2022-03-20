import React, { useLayoutEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"




// import required modules
import { FreeMode, Pagination } from "swiper";

import { Card, Button } from 'react-bootstrap'

const data = [0, 1, 2, 3, 4]

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

const Slider = ({ Events }) => {

    const [width, height] = useWindowSize();

    const [SlidesViewCount, setSlidesViewCount] = useState(true);

    // console.log("Window size:",` ${width} X ${height}`);

    // if(width < 426 ){
    //     setSlidesViewCount(false)
    // }

    // SwiperCore.use([Autoplay])




    return (
        <>
            <Swiper
                modules={[FreeMode, Pagination, Autoplay]}

                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 3,
                    },
                    1440: {
                        width: 1440,

                        slidesPerView: 3,
                    },

                }}
                autoplay={{ delay: 5000 }}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >


                {Events.map((val) => {

                    const { description, group, image, name, price, size } = val


                    return (

                        <SwiperSlide>

                            <div className="slider-container" >


                                <Card className="card" style={{ width: '24rem', backgroundColor: '#052c39', color: 'white', height: '31rem' }}>



                                    <Card.Img className='card-img' variant="top" src={image} />
                                    <Card.Body>
                                        <Card.Title className="card-title" align="center">{name}</Card.Title>

                                        <Card.Text className="card-desc" align="center">
                                            {description}
                                        </Card.Text>

                                        <div className="details">

                                            <p className="card-txt " align="center">
                                                Rs.{price}
                                            </p>

                                            {group ? (

                                                <p className="card-txt small-txt" align="center">
                                                    {group} {size && (`/${size}`)}
                                                </p>
                                            ) : <p className='dummy-txt'>None</p>}
                                        </div>


                                    </Card.Body>
                                    <div className="btn-body">

                                        <button onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/")} className="slider-btn" variant="primary">Register</button>
                                    
                                    </div>







                                </Card>



                            </div>
                        </SwiperSlide>
                    )
                })}


            </Swiper>
        </>
    )
}

export default Slider