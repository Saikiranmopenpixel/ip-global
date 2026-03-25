import React from 'react';
import { Link } from 'react-router';

import whyChooseBg from '../../assets/images/shapes/why-choose-two-shape-bg.png';
import whyChooseStar from '../../assets/images/shapes/why-choose-two-star.png';
// import reviewShape from '../../assets/images/shapes/why-choose-two-review-shape-1.png';
import whyChooseImg from '../../assets/images/resources/hm-it-consulting.jpg';
import pointIcon1 from '../../assets/images/icon/why-choose-two-point-icon-1.png';
import pointIcon2 from '../../assets/images/icon/why-choose-two-point-icon-2.png';
import AdvanceCountUp from '../../components/elements/AdvanceCountUp';
import TextAnimation from '../../components/elements/TextAnimation';

const WhyChooseTwo: React.FC = () => {
    return (
        <>
           

            {/* Why Choose Section */}
            <section className="why-choose-two">
                <div
                    className="why-choose-two__shape-bg" style={{ backgroundImage: `url(${whyChooseBg})` }} ></div>

                <div className="why-choose-two__star zoominout">
                    <img src={whyChooseStar} alt="Star shape" />
                </div>

                <div className="container">
                    <div className="row">
                        {/* Left Side */}
                        <div className="col-xl-5">
                            <div className="why-choose-two__left">
                                {/* <div className="why-choose-two__review">
                                    <div className="why-choose-two__review-shape">
                                        <img src={reviewShape} alt="Review shape" />
                                    </div>
                                    <div className="why-choose-two__review-count-box">
                                        <div className="why-choose-two__review-count count-box">
                                            <p className="count-text" >
                                                <AdvanceCountUp ending={100} durations={3} />
                                            </p>
                                            <span className="why-choose-two__count-letter">k</span>
                                        </div>
                                        <p className="why-choose-two__review-count-text">Reviews</p>
                                    </div>
                                </div> */}

                                <div className="why-choose-two__rating">
                                    <div className="why-choose-two__rating-count count-box">
                                        <p className="count-text" >
                                            <AdvanceCountUp ending={20} />
                                        </p>
                                        <span className="why-choose-two__rating-count-letter">m</span>
                                    </div>

                                    <div className="why-choose-two__rating-content">
                                        <form className="why-choose-two__star-rating">
                                            <input type="radio" id="3-stars" name="rating" value="3" />
                                            <label htmlFor="3-stars" className="star">
                                                &#9733;
                                            </label>
                                            <input type="radio" id="3-stars" name="rating" value="3" />
                                            <label htmlFor="3-stars" className="star">
                                                &#9733;
                                            </label>
                                            <input type="radio" id="3-stars" name="rating" value="3" />
                                            <label htmlFor="3-stars" className="star">
                                                &#9733;
                                            </label>
                                            <input type="radio" id="2-stars" name="rating" value="2" />
                                            <label htmlFor="2-stars" className="star">
                                                &#9733;
                                            </label>
                                            <input type="radio" id="1-star" name="rating" value="1" />
                                            <label htmlFor="1-star" className="star">
                                                &#9733;
                                            </label>
                                        </form>
                                        <p className="why-choose-two__rating-text">Average Rating</p>
                                    </div>
                                </div>

                                <div className="why-choose-two__img-box">
                                    <div className="why-choose-two__img">
                                        <img src={whyChooseImg} alt="Why choose us" />
                                        <div className="why-choose-two__shape-box">
                                            <div className="why-choose-two__shape-1">
                                                <div className="why-choose-two__shape-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-xl-7">
                            <div className="why-choose-two__right">
                                <div className="section-title-two text-left sec-title-animation animation-style2">
                                    <div className="section-title-two__tagline-box">
                                        <div className="section-title-two__tagline-icon-box">
                                            <div className="section-title-two__tagline-icon-1"></div>
                                            <div className="section-title-two__tagline-icon-2"></div>
                                        </div>
                                        <span className="section-title-two__tagline">IT Consulting & Digital Transformation</span>
                                    </div>
                                    <h2 className="section-title-two__title title-animation">
                                        <TextAnimation text='Strategic IT Consulting' textColor='black' isSpan={false} />
                                        <TextAnimation text='for Business Growth.' textColor='#5c2b7a' isSpan={false} />

                                    </h2>
                                </div>

                                <p className="why-choose-two__text">
                                    At IP Global Services, our consulting services help organizations navigate the complexities of modern technology environments and make informed decisions that support long-term growth. We work closely with businesses to understand their technology challenges and provide strategic guidance that aligns IT infrastructure with business objectives.
                                </p>

                                <ul className="list-unstyled why-choose-two__points">
                                    <li>
                                        <div className="icon">
                                            <img src={pointIcon1} alt="Tailored Solutions" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link to="/about">
                                                    Optimizing IT Systems & Infrastructure
                                                </Link>
                                            </h4>
                                            <p>
                                               We optimize existing systems and improve efficiency by strengthening IT infrastructure and network architecture, ensuring scalability, security, and alignment with business needs.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src={pointIcon2} alt="Expert Insights" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link to="/about">
                                                    Driving Digital Transformation & Innovation
                                                </Link>
                                            </h4>
                                            <p>
                                                We help businesses adopt modern technologies and cloud solutions to enhance performance, improve security, and accelerate digital transformation.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseTwo;
