import logo from '/cube.png';

export default function Navbar() {
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} className='nav-logo' alt="Connected components" />
                <h3 className="logo-text">Component Library<span>+</span><span>+</span></h3>
            </div>

            <ul className="nav">
                <li><a href="#badges">Badges</a></li>
                <li><a href="#banners">Banners</a></li>
                <li><a href="#cards">Cards</a></li>
                <li><a href="#testimponials">Testimonials</a></li>
                <li><a href="#tooltips">Tooltips</a></li>
                <li><a href="#toasts">Toasts</a></li>
            </ul>
        </nav>
    )
}