import {useState} from "react";
import AccordionItem from './AccordionItem';
import accordionData from "../../data/accordionData.ts";

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(current => (current === index ? null : index));
    };

    return (
        <>
            <section className="container-lg md:my-[var(--spacing-160)] my-[var(--spacing-60)] mx-auto">
                <div className="text-container mb-[var(--spacing-40)] md:mb-[var(--spacing-50)]">
                    <h2 className="container-md md:my-[var(--spacing-20)] my-[var(--spacing-15)]">Heading text here...</h2>
                    <p className="text-narrow mb-[var(--spacing-10)]">Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat tristique
                        consectetur sit
                        tristique amet in. Etiam egestas elit vestibulum commodo.</p>
                </div>


                <div className="max-w-[var(--max-width-lg)] mx-auto">
                    {accordionData.map(({title, content}, index) => (
                        <AccordionItem
                            key={index}
                            id={`accordion-item-${index}`}
                            isOpen={openIndex === index}
                            onToggle={() => toggleIndex(index)}
                            title={
                                <>
                                      <p
                                          className="mt-[var(--spacing-30)] mb-[var(--spacing-8)] mr-[var(--spacing-15)] typo-body font-light ">
                                          {String(index + 1).padStart(2, "0")}
                                      </p>
                                    <h2 className=" ml-auto mt-[var(--spacing-30)] mb-[var(--spacing-8)] w-full container-md typo-heading-xs color-[var(--color-green-100)] font-[var(--font-regular)]">
                                        {title}
                                    </h2>
                                </>
                            }
                        >
                            <p className="container-md ml-auto my-[var(--spacing-30)]">{content}</p>
                        </AccordionItem>
                    ))}
                    <button className='button-element mt-[var(--spacing-30)] md:mt-[var(--spacing-40)]'><a href="#">CTA Button</a></button>
                </div>
            </section>
        </>
    )
}