import React from 'react';
import { Link } from 'react-router-dom';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
import { ReactComponent as FaceBookIcons } from "../../icons/facebook.svg";
import { ReactComponent as InstgramIcons } from "../../icons/Instgram.svg";
import { ReactComponent as PinterestIcons } from "../../icons/pinterest.svg";
import { ReactComponent as TwitterIcons } from "../../icons/Twitter.svg";
import { ReactComponent as LocationIcons } from "../../icons/map.svg";
import { ReactComponent as MobileIcons } from "../../icons/mobile.svg";
import { ReactComponent as EmailIcons } from "../../icons/email.svg";
import './Footer.css'


function Footer() {
    return (
        <>
            <footer className="footer footer__section ">
                <div className="container">
                    <div className="main__footer footer__wrapper color-offwhite">
                        <div className="row ">
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="footer__widget">
                                    <div className="footer__widget--inner">
                                        <div className="footer__logo">
                                            <Link
                                                className="footer__logo--link display-block"
                                                to="/"
                                            >
                                                <img
                                                    className="footer__logo--img"
                                                    src="./../assets/wpm-1 1.jpg"
                                                    alt="logo-img"
                                                />
                                            </Link>
                                        </div>
                                        <p className="footer__widget--desc">
                                            The world’s first and largest digital market for crypto
                                            collectibles and non-fungible (NFTs). Buy
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3">
                                <div className="footer__widget">
                                    <h2 className="footer__widget--title">
                                        Wpm
                                    </h2>
                                    <ul className="footer__widget--menu footer__widget--inner">
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/listing">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/about">
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/property">
                                                Property
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3">
                                <div className="footer__widget">
                                    <h2 className="footer__widget--title">
                                        Services
                                    </h2>
                                    <ul className="footer__widget--menu footer__widget--inner">
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/terms-conditions">
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/testimonials">
                                                Testimonials
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/safety-guide">
                                                Safety Guide
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/privacy-policy">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3">
                                <div className="footer__widget">
                                    <h2 className="footer__widget--title">
                                        Featured Properties
                                        <button
                                            className="footer__widget--button"
                                            aria-label="footer widget button"
                                        />
                                    </h2>
                                    <ul className="footer__widget--menu footer__widget--inner">
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/sell">
                                                Sell
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/buy">
                                                Buy
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/rent">
                                                Rent
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link className="footer__widget--menu__text" to="/lease">
                                                Lease
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3">
                                <div className="footer__widget">
                                    <h2 className="footer__widget--title">
                                        Contact Us
                                    </h2>
                                    <ul className="footer__widget--info">
                                        <li className="footer__widget--info_list">
                                            <LocationIcons />
                                            <p className="footer__widget--info__text">
                                                86 Road Broklyn Street, 600 New York, USA
                                            </p>
                                        </li>
                                        <li className="footer__widget--info_list">
                                            <EmailIcons />
                                            <a
                                                className="footer__widget--info__text"
                                                href="mailto:example@example.com"
                                            >
                                                Example@example.com
                                            </a>
                                        </li>
                                        <li className="footer__widget--info_list">
                                            <MobileIcons />
                                            <a
                                                className="footer__widget--info__text"
                                                href="tel:+1234567898"
                                            >
                                                (+123) 456-7898
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="footer__social d-flex align-items-center">
                                        <li className="footer__social--list">
                                            <a
                                                className="footer__social--icon"
                                                // target="_blank"
                                                // rel="noopener noreferrer"
                                                // href="https://www.facebook.com/"
                                            >
                                                <FaceBookIcons />
                                                <span className="visually-hidden">Facebook</span>
                                            </a>
                                        </li>
                                        <li className="footer__social--list">
                                            <a
                                                className="footer__social--icon"
                                                // target="_blank"
                                                // rel="noopener noreferrer"
                                                // href="https://twitter.com/"
                                            >
                                                <TwitterIcons />
                                                <span className="visually-hidden">Twitter</span>
                                            </a>
                                        </li>
                                        <li className="footer__social--list">
                                            <a
                                                className="footer__social--icon"
                                                // target="_blank"
                                                // rel="noopener noreferrer"
                                                // href="https://www.instagram.com/"
                                            >
                                                <InstgramIcons />
                                                <span className="visually-hidden">Instagram</span>
                                            </a>
                                        </li>
                                        <li className="footer__social--list">
                                            <a
                                                className="footer__social--icon"
                                                // target="_blank"
                                                // rel="noopener noreferrer"
                                                // href="https://www.pinterest.com/"
                                            >
                                                <PinterestIcons />
                                                <span className="visually-hidden">Pinterest</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterCopyright />
            </footer>
        </>
    );
}

export default Footer;
