import { useIsMobile } from "../../hooks/useIsMobile.tsx";
import FooterMobileMenu from "./FooterMobileMenu.tsx";
import FooterDesktopMenu from "./FooterDesktopMenu.tsx";

export default function Footer() {
    const isMobile = useIsMobile();

    return (
        <>
            <footer className='border-t border-[var(--color-white-300)] nav-menu container-xl md:mb-[var(--spacing-40)] mb-[var(--spacing-20)] pt-[var(--spacing-20)] md:pt-[var(--spacing-60)]'>
                <div className="nav-menu-wrapper flex justify-between">
                    {isMobile ? (
                        <FooterMobileMenu />
                    ) : (
                        <FooterDesktopMenu />
                    )}

                </div>
            </footer>
        </>
    )
}