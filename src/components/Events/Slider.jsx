import React, { useLayoutEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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



    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
            // className="mySwiper"
            >


                {Events.map((val) => {

                    const { description, group, image, name, price, size } = val


                    return (

                        <SwiperSlide>

                            <div className="slider-container" >


                                <Card style={{ width: '24rem', backgroundColor: '#052c39', color: 'white',maxHeight:'28rem' }}>
                                    <Card.Img style={{height:'18rem'}} variant="top" src={image} />
                                    <Card.Body>
                                        <Card.Title align="center">{name}</Card.Title>
                                        <Card.Text align="center">
                                            {description}
                                        </Card.Text>
                                        <Card.Text align="center">
                                            {price}
                                        </Card.Text>

                                        {group && (

                                        <Card.Text align="center">
                                            {group}/{size}
                                        </Card.Text>
                                        )}
                                        <div className="btn-body">

                                            <Button onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/", "_self")} className="slider-btn" variant="primary">Register</Button>
                                        </div>
                                    </Card.Body>
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