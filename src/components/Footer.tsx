import frameworkLogo from '/footer-framework-logo.svg';

export default function Footer() {
    return (
        <>
            <footer className='border-t border-[var(--color-white-300)] nav-menu container-xl mb-[var(--spacing-40)] pt-[var(--spacing-60)]'>
                <div className="nav-menu-wrapper flex justify-between">
                    <div>
                        <div className="nav-logo"><a className='uppercase link-reset typo-body font-bold' href="#">Cottage
                            Retreat</a></div>
                        <div className="mt-[var(--spacing-120)]">
                            <p className="mb-[var(--spacing-6)]">Company name © 2023. All rights Reserved.</p>
                            <div className="flex gap-[var(--spacing-6)]">
                                <p className="mb-[var(--spacing-20)]">Design by</p>
                                <img className="framework-footer-logo mb-[var(--spacing-20)]" width="73" src={frameworkLogo}
                                     alt=""/>
                            </div>
                        </div>

                    </div>

                    <div>
                        <ul className='nav-menu-links font-light list-none flex gap-[var(--spacing-40)]'>
                            <li><a className="link-reset" href="#">Nav button 01</a></li>
                            <li><a className="link-reset" href="#">Nav button 02</a></li>
                            <li><a className="link-reset" href="#">Nav button 03</a></li>
                        </ul>

                        <ul className='text-right mt-[var(--spacing-100)] nav-menu-links font-light list-none flex-col flex gap-[var(--spacing-10)]'>
                            <li><a className="link-reset" href="#">Privacy</a></li>
                            <li><a className="link-reset" href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}