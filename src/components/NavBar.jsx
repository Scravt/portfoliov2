import { useEffect, useRef } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;
            // Evita re-renders de React manipulando el DOM directamente en el hilo de scroll
            if (window.scrollY > 10) {
                headerRef.current.classList.add('scrolled');
                headerRef.current.classList.remove('not-scrolled');
            } else {
                headerRef.current.classList.add('not-scrolled');
                headerRef.current.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={headerRef} className="navbar not-scrolled">
            <div className="inner">
                <a href="#hero" className="logo">
                    Gonzalo Martinez
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>

        </header>
    )
}

export default NavBar