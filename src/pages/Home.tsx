import Nav from '../components/Nav.tsx'
import HomeHero from '../components/HomeHero.tsx'

export default function Home() {
    return (
        <>
            <main id="main" className="container-xxl mx-auto px-[var(--spacing-20)]">
                <Nav/>
                <HomeHero/>
            </main>
        </>
    );
}
