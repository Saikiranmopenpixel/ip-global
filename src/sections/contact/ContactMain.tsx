import React from "react";
import contactIcon from "../../assets/images/icon/contact-form-icon-1.png";

// interface ContactItem {
//     icon: string;
//     title: string;
//     text: string | React.ReactNode;
// }

// const contactInfo: ContactItem[] = [
//     {
//         icon: "icon-pin",
//         title: "Our Address",
//         text: "1234 Elm Street, Suite 567, Springfield, IL 62704, USA",
//     },
//     {
//         icon: "icon-user",
//         title: "Contact Info",
//         text: (
//             <>
//                 <a href="tel:120034558900">+12 (00) 345 58900</a>
//                 <br />
//                 <a href="mailto:info@domain.com">info@domain.com</a>
//             </>
//         ),
//     },
//     {
//         icon: "icon-live-chat",
//         title: "Live Support",
//         text: "We are available for live chat 24 hours a day. Click here.",
//     },
//     {
//         icon: "icon-time",
//         title: "Working Hour",
//         text: (
//             <>
//                 10:00 AM - 6:00 PM <br /> Monday - Friday
//             </>
//         ),
//     },
// ];

const ContactMain: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
        alert("Message sent successfully!");
    };


    return (
        <>

                    <section className="cnt-pg-ae">
                <div className="container">
                    <div className="row">

                        {/* UK */}
                        <div className="col-md-4">
                            <div className="cnt-card">
                                <h4>IPGLOBAL SERVICES</h4>
                                <p>
                                    1F02 West Wing, Arena Business Centre, <br />
                                    100 Berkshire Place, Wharfdale Road, <br />
                                    Winnersh – RG41 5RD
                                </p>
                                <p><strong>Email:</strong> info@ipgs.net</p>
                                <p><strong>Phone:</strong> +44 (0) 1276 402376</p>
                                <a href="https://maps.google.com/?q=Winnersh RG41 5RD"
                                   target="_blank" rel="noreferrer"
                                   className="cnt-btn">
                                    View Map
                                </a>
                            </div>
                        </div>

                        {/* India */}
                        <div className="col-md-4">
                            <div className="cnt-card">
                                <h4>IPGST INDIA PRIVATE LIMITED</h4>
                                <p>
                                    207, Pearls Best Heights-1, <br />
                                    Netaji Subhash Place, Pitampura, <br />
                                    New Delhi-110034
                                </p>
                                <p><strong>Email:</strong> info@ipgs.net</p>
                                <p><strong>Phone:</strong> +91 11 4654 8309</p>
                                <a href="https://maps.google.com/?q=Netaji Subhash Place Pitampura Delhi"
                                   target="_blank" rel="noreferrer"
                                   className="cnt-btn">
                                    View Map
                                </a>
                            </div>
                        </div>

                        {/* UAE */}
                        <div className="col-md-4">
                            <div className="cnt-card">
                                <h4>IP GLOBAL SERVICES, FZCO</h4>
                                <p>
                                    DSO-IZFA, Dubai Digital Park, <br />
                                    Dubai Silicon Oasis, UAE, Dubai
                                </p>
                                <p><strong>Email:</strong> info@ipgs.net</p>
                                <p><strong>Phone:</strong> +971 50 632 2300</p>
                                <a href="https://maps.google.com/?q=Dubai Digital Park"
                                   target="_blank" rel="noreferrer"
                                   className="cnt-btn">
                                    View Map
                                </a>
                            </div>
                        </div>

                        {/* Poland */}
                        <div className="col-md-4">
                            <div className="cnt-card">
                                <h4>IP GLOBAL SERVICES SP. Z O.O.</h4>
                                <p>
                                    ul. PAWyA WyODKOWICA No. 8, LU101, <br />
                                    Kraków, 31-452, Poland
                                </p>
                                <p><strong>Email:</strong> info@ipgs.net</p>
                                <p><strong>Phone:</strong> +48-791612715</p>
                                <a href="https://maps.google.com/?q=Krakow Poland"
                                   target="_blank" rel="noreferrer"
                                   className="cnt-btn">
                                    View Map
                                </a>
                            </div>
                        </div>

                        {/* Australia */}
                        <div className="col-md-4">
                            <div className="cnt-card">
                                <h4>IP GLOBAL SERVICES PVT LTD</h4>
                                <p>
                                    UNIT 1, 22 Graeme Ave, <br />
                                    Montmorency VIC 3094, Australia
                                </p>
                                <p><strong>Email:</strong> info@ipgs.net</p>
                                <p><strong>Phone:</strong> +61 421 381 415</p>
                                <a href="https://maps.google.com/?q=22 Graeme Ave Montmorency"
                                   target="_blank" rel="noreferrer"
                                   className="cnt-btn">
                                    View Map
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ================= Contact Page ================= */}
            <section className="contact-page" id='contact'>
                <div className="container">
                    <div className="row">
                        {/* LEFT SIDE CONTACT INFO */}
                        <div className="col-xl-6 col-lg-6">
                            {/* <div className="contact-page__left">
                                <div className="row">
                                    {contactInfo.map((item: ContactItem, i) => (
                                        <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-page__contact-single">
                                                <div className="contact-page__contact-icon">
                                                    <span className={item.icon}></span>
                                                    <div className="contact-page__contact-icon-shape"></div>
                                                </div>
                                                <h3 className="contact-page__contact-single-title">
                                                    {item.title}
                                                </h3>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                            <div className="google-map-one__inner">
                        
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.935401442115!2d77.14708677550298!3d28.6915789256326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03006ce0a879%3A0x3dadf36bf2cb8c82!2sPearls%20Best%20Heights%20-%201!5e0!3m2!1sen!2sin!4v1774415195559!5m2!1sen!2sin" className="google-map__one"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div className="col-xl-6 col-lg-6">
                            <div className="contact-page__right">
                                <div className="contact-page__contact-form-title-box">
                                    <div className="contact-page__contact-form-title-icon">
                                        <img src={contactIcon} alt="Contact Icon" />
                                    </div>
                                    <h3 className="contact-page__contact-form-title">
                                        Send Us Message
                                    </h3>
                                </div>



                                <form
                                    className="contact-form-validated contact-page__form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-user"></span>
                                                </div>
                                                <input type="text" name="name" placeholder="Name" required />
                                            </div>
                                        </div>


                                        <div className="col-xl-6">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-envelope"></span>
                                                </div>
                                                <input type="email" name="email" placeholder="Email" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="contact-page__input-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-resume"></span>
                                                </div>
                                                <input type="text" name="subject" placeholder="Subject" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="contact-page__input-box text-message-box">
                                                <div className="contact-page__input-icon">
                                                    <span className="icon-write"></span>
                                                </div>
                                                <textarea name="message" placeholder="Message"></textarea>
                                            </div>

                                            <div className="contact-page__btn-box">
                                                <button
                                                    type="submit"
                                                    className="thm-btn contact-page__btn"
                                                >
                                                    <span className="icon-right"></span> SEND MESSAGE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className="result"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= Google Map ================= */}
            <section className="google-map-one">
                <div className="container">
                    
                </div>
            </section>
        </>
    );
};

export default ContactMain;