import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion"
import aboutTwoImg1 from '../../assets/images/resources/home-about.jpg';
import aboutTwoIcon1 from '../../assets/images/icon/about-two-icon-1.png';
import aboutTwoIcon2 from '../../assets/images/icon/about-two-icon-2.png';
import aboutTwoIcon3 from '../../assets/images/icon/about-two-icon-3.png';
import aboutTwoIcon4 from '../../assets/images/icon/about-two-icon-4.png';
import TextAnimation from '../../components/elements/TextAnimation';

const AboutTwo: React.FC = () => {
    return (
        <section className="about-two">
            <div className="about-two__shape-box">
                <div className="about-two__shape-1">
                    <div className="about-two__shape-2">
                        <div className="about-two__shape-3"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <motion.div
                        className="col-xl-5"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}
                        viewport={{ amount: 0.01, once: true }}
                    >
                        <div className="about-two__left">
                            <div className="section-title-two text-left sec-title-animation animation-style2">
                                <div className="section-title-two__tagline-box">
                                    <div className="section-title-two__tagline-icon-box">
                                        <div className="section-title-two__tagline-icon-1"></div>
                                        <div className="section-title-two__tagline-icon-2"></div>
                                    </div>
                                    <span className="section-title-two__tagline">About Us</span>
                                </div>
                                <h2 className="section-title-two__title title-animation">
                                    <TextAnimation text='Empowering Businesses with' textColor='black' isSpan={false} />
                                    <TextAnimation text='Advanced IT & Telecom Solutions.' fontSize='37' textColor='#5c2b7a' isSpan={false} />

                                </h2>
                            </div>

                            <div className="about-two__img">
                                <img src={aboutTwoImg1} alt="About Us" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <div className="col-xl-7">
                        <div className="about-two__right">
                            <p className="about-two__text">
                                IP Global Services is a technology-driven organization focused on delivering high-performance IT and telecom infrastructure solutions. We help businesses build scalable, secure, and efficient technology environments through expert design, implementation, and management. With a strong foundation in enterprise networking, cloud, and telecom systems, we enable organizations to stay connected, competitive, and future-ready.
                            </p>

                            <div className="about-two__points-box">
                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                                        <div className="icon">
                                            <img src={aboutTwoIcon1} alt="IT & Telecom Infrastructure" />
                                        </div>
                                        <div className="content">
                                            <h3>IT & Telecom Infrastructure</h3>
                                            <p>
                                                We design and deploy reliable IT and telecom systems for seamless communication and performance.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                        <div className="icon">
                                            <img src={aboutTwoIcon2} alt="Enterprise Networking Solutions" />
                                        </div>
                                        <div className="content">
                                            <h3>Enterprise Networking Solutions</h3>
                                            <p>
                                                We deliver secure and scalable networking solutions to support business growth.
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <ul className="list-unstyled about-two__points">
                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="150">
                                        <div className="icon">
                                            <img src={aboutTwoIcon3} alt="Digital Transformation & Cloud" />
                                        </div>
                                        <div className="content">
                                            <h3>Digital Transformation & Cloud</h3>
                                            <p>
                                                We enable businesses to adopt cloud and modern IT solutions for better efficiency.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-left" data-aos-duration="1200" data-aos-delay="250">
                                        <div className="icon">
                                            <img src={aboutTwoIcon4} alt="Training & Skill Development" />
                                        </div>
                                        <div className="content">
                                            <h3>Training & Skill Development</h3>
                                            <p>
                                                We provide practical training to build strong careers in IT and telecom.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="about-two__bottom">
                                <div className="about-two__btn-and-call-box">
                                    <div className="about-two__btn-box">
                                        <Link to="/about" className="about-two__btn thm-btn thm-btn-two">
                                            <span className="icon-right"></span> Know More
                                        </Link>
                                    </div>

                            
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTwo;
