import classNames from "classnames";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function Testimonial({ children, logo, size, className, ...rest }) {
    const sizeClass = size && size;
    const classes = classNames(className, sizeClass);

    return (
        <div className={`testimonial ${classes}`}>
            {logo}
            <div className="testimonial-body">
                {children}
            </div>
        </div>
    )
}