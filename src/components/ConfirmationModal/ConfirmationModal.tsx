import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    buttonColor?: string;
    onConfirm: () => any;
    buttonText?: string;
    children?: React.ReactNode;
}

export const ConfirmationModal: React.FC<Props> = ({
    isOpen,
    setIsOpen,
    title,
    buttonColor = "primary",
    onConfirm,
    buttonText = "Confirm",
    children,
}: Props) => {
    const toggle = React.useCallback(() => {
        setIsOpen(o => !o);
    }, [setIsOpen]);

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle} className="mb-0">
                {title}
            </ModalHeader>
            <ModalBody>{children || "Are you sure?"}</ModalBody>
            <ModalFooter>
                <Button size="sm" color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                <Button
                    size="sm"
                    color={buttonColor}
                    onClick={() => onConfirm()}
                >
                    {buttonText}
                </Button>
            </ModalFooter>
        </Modal>
    );
};
