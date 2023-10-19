import { Children } from "react";
import classNames from "classnames";

export default function TestimonialWithImage({ children, image, size, className, ...rest }) {
    const sizeClass = size && size;
    const classes = classNames(className, sizeClass);

    return (
        <div className={`testimonial ${classes}`}>
            {image}
            <div className="testimonial-body">
                {Children}
            </div>
        </div>
    )
}