import Badge from "./Badge";

export default function Badges() {
    const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];

    return (
        <section id="badges">
            <h1 className="badges-title">BADGES</h1>
            
            <h3 className="badges-square-title">SQUARE</h3>
            <div className="badges-square-container">
                {colors.map(color => <Badge variant='square' color={color}>Badge</Badge>)}
            </div>

            <h3 className="badges-pill-title">PILL</h3>
            <div className="badges-pill-container">
            {colors.map(color => <Badge variant='pill' color={color}>Badge</Badge>)}
            </div>

        </section>
    )
}