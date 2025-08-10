export default function Nav() {
    return (
        <>
            <nav id='nav' className='nav-menu container-default'>
                <div className="nav-menu-wrapper flex justify-between py-[var(--spacing-16)]">
                    <div className="nav-logo"><a className='uppercase link-reset typo-body font-bold' href="#">Cottage Retreat</a></div>
                    <ul className='nav-menu-links font-light list-none flex gap-[var(--spacing-50)]'>
                        <li><a className="link-reset" href="#">Nav button 01</a></li>
                        <li><a className="link-reset" href="#">Nav button 02</a></li>
                        <li><a className="link-reset" href="#">Nav button 03</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}