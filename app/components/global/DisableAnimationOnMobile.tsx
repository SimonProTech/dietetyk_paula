import {
    Children, cloneElement, isValidElement,
} from 'react';
import { AnimationProps } from 'framer-motion';
import useMobile from "@/app/hooks/useMobile";

const DisableAnimationOnMobile = ({ children }: {children: any | any[]}) => {
    const { mobile } = useMobile();

    if (!mobile) return children;

    const disableAnimation = Children.map(children, (child: any) => {
        if (isValidElement(child)) {
            const emptyAnimation = {
                animate: 'default',
                initial: undefined,
                exit: undefined,
                variants: { default: { opacity: 1, top: 0, bottom: 0 } },
                transition: { duration: 0 },
            } as AnimationProps;

            return cloneElement(child, emptyAnimation);
        }
        return child;
    });

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return disableAnimation;
};

export default DisableAnimationOnMobile;
