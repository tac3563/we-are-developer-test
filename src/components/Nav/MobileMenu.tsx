import {useEffect} from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
    function handleHamburgerClick() {
        setIsMenuOpen(prev => !prev);
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    return (
        <>
            {!isMenuOpen ? (
                <svg
                    onClick={handleHamburgerClick}
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer z-1"
                >
                    <line x1="20" y1="1" x2="0" y2="1" stroke="#2E4845" strokeWidth="2" />
                    <line x1="20" y1="6" x2="0" y2="6" stroke="#2E4845" strokeWidth="2" />
                    <line x1="20" y1="11" x2="0" y2="11" stroke="#2E4845" strokeWidth="2" />
                </svg>
            ) : (
                <svg
                    onClick={handleHamburgerClick}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer z-1"
                >
                    <line
                        x1="18.2561"
                        y1="1.37395"
                        x2="0.44669"
                        y2="19.1834"
                        stroke="#FFFFFF"
                        strokeWidth="1.25932"
                    />
                    <line
                        y1="-0.629659"
                        x2="25.1864"
                        y2="-0.629659"
                        transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.26013 0.929199)"
                        stroke="#FFFFFF"
                        strokeWidth="1.25932"
                    />
                </svg>
            )}

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-left w-full h-full bg-[var(--color-green-200)] text-white flex flex-col justify-center items-center z-0"
                    >
                        <ul className="nav-menu-links text-[var(--color-white-100)] absolute left-[var(--spacing-6)] top-[var(--spacing-130)] font-light list-none flex flex-col gap-[var(--spacing-30)] typo-heading-m">
                            <li>
                                <a className="link-reset" href="#">
                                    Nav button 01
                                </a>
                            </li>
                            <li>
                                <a className="link-reset" href="#">
                                    Nav button 02
                                </a>
                            </li>
                            <li>
                                <a className="link-reset" href="#">
                                    Nav button 03
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
