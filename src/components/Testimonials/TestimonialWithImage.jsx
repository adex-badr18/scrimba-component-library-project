import { Children } from "react";
import classNames from "classnames";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function TestimonialWithImage({ children, image, size, className, ...rest }) {
    const sizeClass = size && size;
    const classes = classNames(className, sizeClass);

    return (
        <div className={`testimg ${classes}`} {...rest}>
            {image}
            <div className="testimg-body">
                <BiSolidQuoteAltLeft className="quote-icon" />
                {children}
            </div>
        </div>
    )
}