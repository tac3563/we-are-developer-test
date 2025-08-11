import { motion, AnimatePresence } from 'framer-motion';

export default function AccordionItem({ id, isOpen, onToggle, title, children }) {
    return (
        <div className="flex flex-col cursor-pointer">
            <div
                aria-expanded={isOpen}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
                onClick={onToggle}
                className=" w-full text-left flex justify-between items-center border-0 border-b border-[var(--color-white-300)] bg-transparent"
            >
                <div className="w-full typo-heading-xs font-regular flex">{title}</div>

                {isOpen ? (
                    <svg
                        className="mt-[var(--spacing-30)] mb-[var(--spacing-8)]"
                        width="22"
                        height="1"
                        viewBox="0 0 22 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <line y1="0.5" x2="21.4521" y2="0.5" stroke="#2E4845" />
                    </svg>
                ) : (
                    <svg
                        className="mt-[var(--spacing-30)] mb-[var(--spacing-15)]"
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <line x1="10.7153" y1="0" x2="10.7153" y2="21" stroke="#2E4845" />
                        <line y1="10.5" x2="21.4521" y2="10.5" stroke="#2E4845" />
                    </svg>
                )}
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        id={`${id}-content`}
                        role="region"
                        aria-labelledby={`${id}-header`}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: 'auto', opacity: 1 },
                            collapsed: { height: 0, opacity: 0 }
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden text-[var(--color-green-100)] typo-body"
                    >
                        <div>{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
