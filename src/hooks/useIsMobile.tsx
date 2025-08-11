import { useState, useEffect } from 'react';

export function useIsMobile(onDesktop?: () => void) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkViewport = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile && onDesktop) {
                onDesktop();
            }
        };

        checkViewport();

        window.addEventListener('resize', checkViewport);
        return () => window.removeEventListener('resize', checkViewport);
    }, [onDesktop]);

    return isMobile;
}
