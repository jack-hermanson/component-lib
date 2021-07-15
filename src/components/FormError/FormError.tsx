import React from "react";

interface Props {
    children: React.ReactNode;
}

export const FormError: React.FC<Props> = ({ children }) => {
    return <span className="form-text text-danger">{children}</span>;
};
