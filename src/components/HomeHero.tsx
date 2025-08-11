import homeHeroImage from '/home-hero-image.jpg';

export default function HomeHero() {
    return (
        <section className='container-xxl mt-[var(--spacing-100)]  mb-[var(--spacing-80)] md:mb-[var(--spacing-160)]'>
            <h1 className="typo-heading-l container-md font-regular mb-[var(--spacing-30)] md:mb-[var(--spacing-40)]">
                Lorem ipsum dolor sit amet consectetur. Et at quam ac vitae.
            </h1>
            <img className="overflow-image" src={homeHeroImage} alt="" />
        </section>
    );
}
