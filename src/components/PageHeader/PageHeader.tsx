import React from "react";

interface Props {
    title: string;
    children?: React.ReactNode;
    className?: string;
    border?: boolean;
}

export const PageHeader: React.FC<Props> = ({
    title,
    children,
    className,
    border = true,
}: Props) => {
    return (
        <div
            className={`d-flex ${border ? `border-bottom` : ""} mb-3 ${
                className ? className : ""
            }`}
        >
            <h3 className="mb-0 mt-1">{title}</h3>
            {children && <div className="ms-auto mt-auto mb-1">{children}</div>}
        </div>
    );
};
