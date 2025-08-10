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
            <div className="my-[var(--spacing-160)]">
                <div className="text-container mb-[var(--spacing-50)]">
                    <h2 className="container-md">Heading text here...</h2>
                    <p className="container-sm">Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat tristique
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
                                      <span
                                          className="mr-[var(--spacing-15)] typo-body font-light font-[var(--font-family)]">
                                        {String(index + 1)}.
                                      </span>
                                    <span className=" color-[var(--color-green-100)] font-[var(--font-family)]">
                                        {title}
                                    </span>
                                </>
                            }
                        >
                            <p>{content}</p>
                        </AccordionItem>
                    ))}
                    <button className='button-element mt-[var(--spacing-20)]'><a href="#">CTA Button</a></button>
                </div>
            </div>
        </>
    )
}