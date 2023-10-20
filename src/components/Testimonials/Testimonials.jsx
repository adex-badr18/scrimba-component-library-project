import Testimonial from './Testimonial';
import TestimonialWithImage from './TestimonialWithImage';
import mobileImg from '/testimonial-landscape.png';
import desktopImg from '/testimonial-portrait.png';
import logo from '/testimonial-logo.png';


export default function Testimonials() {
    const imgMobile = <img src={mobileImg} alt='Testimonial' />;
    const imgDesktop = <img src={desktopImg} alt='Testimonial' />;
    const testLogo = <img src={logo} alt="Workcation logo" />

    return (
        <section id="testimonials" className="testimonials">
            <h1 className="title">Testimonials</h1>

            <div className="desktop">
                {/* <div className="testimg-desktop-container">
                    <TestimonialWithImage image={imgDesktop} size='desktop'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>

                        <div>
                            <h5>May Andersons</h5>
                            <small>Workcation, CTO</small>
                        </div>
                    </TestimonialWithImage>
                </div> */}
            </div>

            <div className="mobile-testimonials">
                <div className="testimg-container">
                    <TestimonialWithImage image={imgMobile} size='mobile'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>

                        <div>
                            <h5>May Andersons</h5>
                            <small>Workcation, CTO</small>
                        </div>
                    </TestimonialWithImage>
                </div>

                <div className="testimonial-container">
                    <Testimonial logo={testLogo} size='mobile'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." </p>

                        <div>
                            <h5>May Andersons</h5>
                            <small>Workcation, CTO</small>
                        </div>
                    </Testimonial>
                </div>
            </div>
        </section>
    )
}