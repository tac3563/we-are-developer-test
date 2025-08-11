import frameworkLogo from '/footer-framework-logo.svg';

export default function FooterMobileMenu() {

    return (
        <>
            <div className='mb-[var(--spacing-50)]'>
                <div className="nav-logo"><a className='uppercase link-reset typo-body font-bold' href="#">Cottage
                    Retreat</a></div>
            </div>

            <div>
                <ul className='nav-menu-links font-light list-none flex flex-col gap-[var(--spacing-15)]'>
                    <li><a className="link-reset" href="#">Nav button 01</a></li>
                    <li><a className="link-reset" href="#">Nav button 02</a></li>
                    <li><a className="link-reset" href="#">Nav button 03</a></li>
                    <li><a className="link-reset" href="#">Privacy</a></li>
                    <li><a className="link-reset" href="#">Terms & Conditions</a></li>
                </ul>
            </div>

            <div className="md:mt-[var(--spacing-120)] mt-[var(--spacing-90)]">
                <p className="mb-[var(--spacing-6)]">Company name © 2023. All rights Reserved.</p>
                <div className="flex gap-[var(--spacing-6)]">
                    <p className="mb-[var(--spacing-20)]">Design by</p>
                    <img className="framework-footer-logo mb-[var(--spacing-20)]" width="73" src={frameworkLogo}
                         alt=""/>
                </div>
            </div>

        </>
    )
}