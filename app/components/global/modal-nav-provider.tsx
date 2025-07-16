'use client'

import { createContext, ReactNode, useState } from 'react'


type ModalContextType = {
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
    open: boolean
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const openModal = (content: ReactNode) => {
        setModalContent(content);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, open }}>
            {children}
            {open && modalContent}
        </ModalContext.Provider>
    );
}
