'use client'

import { useEffect, useState } from 'react';

const UseMobile = () => {
    const [mobile, setIsMobile] = useState<boolean>(false);
    const setWidthHandler = () => {
        if (window.innerWidth < 980) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        if (window.innerWidth < 980) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        window.addEventListener('resize', setWidthHandler);

        return () => {
            window.removeEventListener('resize', setWidthHandler);
        };
    }, []);

    return {
        mobile,
    };
};

export default UseMobile;
