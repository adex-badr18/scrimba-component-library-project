import Badge from "./Badge";

export default function Badges() {
    const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];

    return (
        <section id="badges" className="badges-container">
            <h1 className="title badges-title">BADGES</h1>

            <h3 className="title square-title">SQUARE</h3>
            <div className="square-container">
                {colors.map(color => <Badge key={color} variant='square' color={color}>Badge</Badge>)}
            </div>

            <h3 className="title pill-title">PILL</h3>
            <div className="pill-container">
            {colors.map(color => <Badge key={color} variant='pill' color={color}>Badge</Badge>)}
            </div>

        </section>
    )
}