import Nav from '../components/Nav/Nav.tsx';
import HomeHero from '../components/HomeHero.tsx';
import CTASection from '../components/CTASection.tsx';
import ImageGrid from '../components/ImageGrid.tsx';
import Accordion from '../components/Accordion/Accordion';
import Footer from '../components/Footer/Footer.tsx';

export default function Home() {

    return (
        <>
            <main id="main" className="container-xxl mx-auto px-[var(--spacing-20)]">
                <Nav />
                <HomeHero />
                <CTASection />
                <ImageGrid />
                <Accordion />
                <Footer />
            </main>
        </>
    );
}
