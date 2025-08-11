import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isMobile = useIsMobile(() => {
        setIsMenuOpen(false);
    });

    return (
        <nav id="nav" className="nav-menu container-xl mb-[var(--spacing-100)]">
            <div className="nav-menu-wrapper relative flex justify-between items-center py-[var(--spacing-30)] md:py-[var(--spacing-16)]">
                <div className="nav-logo z-1 ">
                    <a
                        href="#"
                        className={`uppercase link-reset typo-body font-bold tracking-[var(--tracking-logo)] ${
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