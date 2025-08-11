export default function ImageGrid() {

    const images = [
        { url: 'img-grid-1.png' },
        { url: 'img-grid-2.png' },
        { url: 'img-grid-3.png' },
        { url: 'img-grid-4.png' },
        { url: 'img-grid-5.png' },
        { url: 'img-grid-6.png' },
        { url: 'img-grid-7.png' },
    ];

    return (
        <>
             <section className="container-xl md:my-[var(--spacing-160)] my-[var(--spacing-80)]">
                 <ul className="image-grid">
                     {
                         images.map((image, index) => (
                             <li key={index}>
                                 <img src={image.url} alt=""/>
                             </li>
                         ))
                     }
                 </ul>
             </section>
        </>
    )
}