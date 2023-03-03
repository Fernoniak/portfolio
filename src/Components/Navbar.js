import React from 'react';
import './Navbar.css';

const Navbar = () => {

    const [navbarHeight, setNavbarHeight] = React.useState(false)

    const changeNavbarHeight = () => {
        if (window.scrollY >= 201) {
            setNavbarHeight(true)
        } else {
            setNavbarHeight(false)
        }
    }

    React.useEffect(() => {

        changeNavbarHeight();
        window.addEventListener("scroll", changeNavbarHeight)


    }, [])


    return (
        <nav className={navbarHeight ? "navbar" : "navbar active"}>
            <div className='navbar-logo'>
                <a href='#root'><img src="Icons/Logo/Logo.png" alt="Jakub Klimczyk-Logo" /></a>
            </div>
            <ul className="navbar-list">
                <a href='#aboutMe'><li className="navbar-item">O mnie</li></a>
                <a href='#skills'><li className="navbar-item">Umiejętności</li></a>
                <a href='#portfolio'><li className="navbar-item">Portfolio</li></a>
                <a href='#contact'><li className="navbar-item">Kontakt</li></a>
            </ul>
        </nav>
    );
};

export default Navbar;