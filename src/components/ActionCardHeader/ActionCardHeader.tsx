import React from "react";
import { CardHeader } from "reactstrap";

interface Props {
    title: string;
    children?: React.ReactNode;
}

export const ActionCardHeader: React.FC<Props> = ({
    title,
    children,
}: Props) => {
    return (
        <CardHeader className="d-flex">
            <h5 className="my-auto">{title}</h5>
            {children && <div className="ms-auto">{children}</div>}
        </CardHeader>
    );
};
