import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { CardHeader } from "reactstrap";

interface Props {
    title: string;
    children?: React.ReactNode;
    linkTo?: string;
}

export const ActionCardHeader: React.FC<Props> = ({
    title,
    children,
    linkTo,
}: Props) => {
    return (
        <CardHeader className="d-flex">
            <h5 className="my-auto">
                {linkTo ? (
                    <Link className="header-link" to={linkTo}>
                        {title}
                    </Link>
                ) : (
                    <Fragment>{title}</Fragment>
                )}
            </h5>
            {children && <div className="ms-auto">{children}</div>}
        </CardHeader>
    );
};
