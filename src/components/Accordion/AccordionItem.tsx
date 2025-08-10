import { motion, AnimatePresence } from 'framer-motion';

export default function AccordionItem({ id, isOpen, onToggle, title, children }) {
    return (
        <div className="">
            <button
                aria-expanded={isOpen}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
                onClick={onToggle}
                className=" w-full text-left py-[var(--spacing-15)] px-[var(--spacing-20)] flex justify-between items-center border-0 border-b border-[var(--color-white-300)] bg-transparent"
            >
                <span className="typo-heading-xs font-regular">{title}</span>

                {isOpen ? (
                    <svg
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
            </button>

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
                        className="overflow-hidden px-[var(--spacing-20)] text-[var(--color-green-100)] typo-body"
                    >
                        <div className="py-[var(--spacing-12)]">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
