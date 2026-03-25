import React, { useState } from 'react';
// import { Link } from 'react-router';

// Import images
import sliderShape1 from '../../assets/images/shapes/main-slider-shape-1.png';
import sliderShape2 from '../../assets/images/shapes/main-slider-shape-2.png';
import sliderShape3 from '../../assets/images/shapes/main-slider-shape-3.png';
import sliderShape4 from '../../assets/images/shapes/main-slider-shape-4.png';
import clientImg1 from '../../assets/images/icon/male.png';
import clientImg2 from '../../assets/images/icon/female.png';
import ratingLogo from '../../assets/images/resources/main-slider-rating-content-logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';
import slideBg1 from '../../assets/images/backgrounds/hm-banner-01.jpg';
import slideBg2 from '../../assets/images/backgrounds/hm-banner-02.jpg';
import slideBg3 from '../../assets/images/backgrounds/hm-banner-03.jpg';


const Banner: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    // Slider items data array
const sliderItems = [
    {
        id: 1,
        bgImage: slideBg1,
        title: 'Reliable IT Infrastructure for',
        highlight: 'Modern Enterprises',
        description: 'Delivering scalable IT infrastructure, enterprise network solutions, and managed services <br />that empower businesses to operate efficiently, securely, and without interruption.',
        
        happyClients: 2000,
        positiveRating: 30
    },
    {
        id: 2,
        bgImage: slideBg2,
        title: 'Advanced Telecom and',
        highlight: 'Enterprise Solutions',
        description: 'From telecom infrastructure deployment to enterprise network security and optimization, <br />we deliver robust connectivity solutions that keep organizations connected, scalable, and secure.',
        
        happyClients: 3000,
        positiveRating: 25
    },
    {
        id: 3,
        bgImage: slideBg3,
        title: ' Accelerate Your Digital',
        highlight: 'Transformation',
        description: 'Leverage cloud infrastructure, data center services, and strategic IT consulting to <br />transform your business with innovative, future-ready technology solutions.',
        
        happyClients: 4000,
        positiveRating: 35
    }
];

    return (
        <section className="main-slider">
            <div className="main-slider__shape-bg-2"></div>
            <div className="main-slider__shape-bg"></div>
            <div className="main-slider__shape-bg-3 img-bounce"></div>
            <div className="main-slider__shape-1 zoominout">
                <img src={sliderShape1} alt="" />
            </div>
            <div className="main-slider__shape-2 rotate-me">
                <img src={sliderShape2} alt="" />
            </div>
            <div className="main-slider__shape-3 float-bob-x">
                <img src={sliderShape3} alt="" />
            </div>
            <div className="main-slider__shape-4 rotate-me">
                <img src={sliderShape4} alt="" />
            </div>
            <div className="main-slider__carousel owl-carousel owl-theme">
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    spaceBetween={0}
                    effect="fade"
                    slidesPerView={1}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >
                    {sliderItems.map((item, index) => (
                        <SwiperSlide key={item.id}>
    <div
        className={`item ${index === activeIndex ? "active" : ""}`}
        style={{
            backgroundImage: `url(${item.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
    >
        <div className="container">
            <div className="main-slider__content">
                <div className="main-slider__title-box">
<h2 className="main-slider__title" style={{ fontSize: "60px" }} > {item.title} <br /> <span>{item.highlight}</span> </h2>

                </div>

                <p
    className="main-slider__text"
    dangerouslySetInnerHTML={{ __html: item.description }}
></p>

                <div className="main-slider__satisfied-client-and-rating-box">
                    <div className="main-slider__satisfied-client-box">
                        <ul className="list-unstyled main-slider__satisfied-client-list">
                            <li>
                                <div className="main-slider__satisfied-client-img">
                                    <img src={clientImg1} alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="main-slider__satisfied-client-img">
                                    <img src={clientImg2} alt="" />
                                </div>
                            </li>
                        </ul>

                        <div className="main-slider__satisfied-client-content">
                            <div className="main-slider__satisfied-client-count count-box">
                                <h4 className="count-text">
                                    <AdvanceCountUp ending={item.happyClients} />
                                </h4>
                                <span className="main-slider__satisfied-client-count-plus">+</span>
                            </div>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="main-slider__rating-box">
                        <div className="main-slider__rating-count count-box">
                            <h3 className="count-text">
                                <AdvanceCountUp ending={item.positiveRating} />
                            </h3>
                            <span>k</span>
                        </div>

                        <div className="main-slider__rating-content">
                            <p>Positive Rating</p>
                            <div className="main-slider__rating-content-logo">
                                <img src={ratingLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</SwiperSlide>
                    ))}
                </Swiper>
                <div className="owl-nav " style={{ zIndex: 111 }}>
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        className="owl-prev"
                        aria-label="Previous Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        className="owl-next"
                        aria-label="Next Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Banner;