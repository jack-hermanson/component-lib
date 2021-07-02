import React from "react";
import { CardBody, Table } from "reactstrap";
import { KeyValPair } from "jack-hermanson-ts-utils";
import { KeyValTable } from "../KeyValTable/KeyValTable";

interface Props {
    keyValPairs: KeyValPair[];
    children?: React.ReactNode;
}

export const KeyValCardBody: React.FC<Props> = ({
    keyValPairs,
    children,
}: Props) => {
    return (
        <React.Fragment>
            <CardBody className="p-0">
                <KeyValTable
                    keyValPairs={keyValPairs}
                    className="card-table mb-0"
                />
            </CardBody>
            {children && <CardBody>{children}</CardBody>}
        </React.Fragment>
    );
};
