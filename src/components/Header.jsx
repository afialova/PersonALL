import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    return (
        <header>
            <a
                href="/"
                style={{
                    textDecoration: 'none',
                    color: '#000',
                    cursor: 'pointer',
                }}
            >
                PersonALL
            </a>
            <nav ref={navRef}>
                <a href="/About">O nás</a>
                <a href="/Conditions">Test</a>
                <a href="/Contacts">Kontakty</a>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Header;
