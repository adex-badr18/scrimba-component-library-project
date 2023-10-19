import Testimonial from './Testimonial';
import TestimonialWithImage from './TestimonialWithImage';
import mobileImg from '/testimonial-landscape.png';

export default function Testimonials() {
    const imgMobile = <img src={mobileImg} alt='Testimonial' />;

    return (
        <section id="testsimg" className="testsimg">
            <h1 className="title testsimg-title">Testimonials</h1>

            <div className="testsimg-container">
                <h3 className="title testimg-title">Mobile</h3>
                <div className="testimg-container">
                    <TestimonialWithImage image={imgMobile} size='mobile'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>

                        <h5>May Andersons</h5>
                        <small>Workcation, CTO</small>
                    </TestimonialWithImage>
                </div>
            </div>
        </section>
    )
}