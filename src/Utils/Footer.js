import React from 'react'
import '../Utils/custom.css'

export default function Footer() {
    return (
<div>
    <section className="foter-box" id="footer">
        <footer>
                    <div className="container-foter">
                        <div className="sec about">
                            <h2 className="foter-h2">
                                about us
                    </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatem dignissimos temporibus asperiores quidem,
                        reprehenderit animi!</p>
                            <ul className="sci-foter">
                                <li className="li-foter"><a className="a-foter" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li className="li-foter"><a className="a-foter" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li className="li-foter"><a className="a-foter" href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                <li className="li-foter"><a className="a-foter" href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                    </div>
                    <div className="sec quickLinks">
                        <h2 className="foter-h2">Quick Links</h2>
                        <ul className="quickLinks-ul-foter">
                            <li className="quickLinks-li-foter"><a className="quickLinks-a-foter" href="#">About</a></li>
                            <li className="quickLinks-li-foter"><a className="quickLinks-a-foter" href="#">FAQS</a></li>
                            <li className="quickLinks-li-foter"><a className="quickLinks-a-foter" href="#">Privacy Policy</a></li>
                            <li className="quickLinks-li-foter"><a className="quickLinks-a-foter" href="#">Help</a></li>
                            <li className="quickLinks-li-foter"><a className="quickLinks-a-foter" href="#">Terms & Condetions</a></li>
                            <li className="quickLinks-li-foter"><a className="quickLinks-a-foter" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="sec contact">
                        <h2 className="foter-h2">contact Info</h2>
                        <ul className="contact-info">
                            <li className="contact-li">
                                <span className="contact-span"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span className="contact-span">Johar town <br></br>
                                    Example center, flor #5 Ngxoft-oficial <br></br>
                                        Lahore</span>
                            </li>
                            <li className="contact-li">
                                <span className="contact-span"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                <p><a className="contact-a" href="tel12345678">+923334702475</a><br></br>
                                    <a className="contact-a" href="tel12345678">+923030628452</a>
                                </p>
                            </li>
                            <li className="contact-li">
                                <span className="contact-span"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                <p><a className="contact-a" href="ngxoftoficial.com">Ngxoft-oficial.com</a></p>
                            </li>
                        </ul>
                    </div>
            </div>
        </footer>
        <div className="copyrighttext">
        <p>copyright @ 2021 Ngxoft-oficial. All Rights Reserved.</p>
        </div>



    </section>
</div>
    )
}
