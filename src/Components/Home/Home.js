import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MyComponents from '../ProductsList/Mycomponents';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
        };
  return (
    <div>
        <Slider {...settings} className='w-[95%] m-auto'>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-23102023-MainBannerDailyChanging-Z1-P3-DillingerTheBeaHouse-min60.jpg" alt=""/>
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22112023-BlackFridaySale-Entrypoint1.gif" alt=""/>
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-23102023-MainBannerDailyChanging-Z1-P4-Mnsgap-upto50.jpg" alt=""/>
            </div>
            <div>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22112023-BlackFridaySale-Entrypoint1.gif" alt=""/>
            </div>
        </Slider>
<MyComponents/>
    </div>
  )
}

export default Home