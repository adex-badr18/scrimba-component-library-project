import logo from '/cube.png';

export default function Navbar() {
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="Connected components" />
                <h3 className="logo-text">Component Library++</h3>
            </div>

            <ul className="nav">
                <li><a href="#">Badges</a></li>
                <li><a href="#">Banners</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Tooltips</a></li>
                <li><a href="#">Toasts</a></li>
            </ul>
        </nav>
    )
}