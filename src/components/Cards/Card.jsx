import classNames from "classnames";
import Badge from "../Badges/Badge";

export default function Card({children, isHoverable, icon, className, ...rest}) {
    const hoverClass = isHoverable ? 'hover' : '';
    const classes = classNames(className, hoverClass);

    return (
        <div className={`card ${classes}`} {...rest}>
            <Badge className='card-badge' color='blue' variant='square'>{icon}</Badge>
            {children}
        </div>
    )
}