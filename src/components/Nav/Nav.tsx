import { useState, useEffect } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Nav() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkViewport = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        checkViewport();

        window.addEventListener('resize', checkViewport);
        return () => window.removeEventListener('resize', checkViewport);
    }, []);

    return (
        <nav id="nav" className="nav-menu container-xl mb-[var(--spacing-100)]">
            <div className="nav-menu-wrapper relative flex justify-between items-center py-[var(--spacing-30)] md:py-[var(--spacing-16)]">
                <div className="nav-logo z-1">
                    <a
                        href="#"
                        className={`uppercase link-reset typo-body font-bold ${
                            isMenuOpen ? 'text-[var(--color-white-100)]' : ''
                        }`}
                    >
                        Cottage Retreat
                    </a>
                </div>

                {isMobile ? (
                    <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                ) : (
                    <DesktopMenu />
                )}
            </div>
        </nav>
    );
}