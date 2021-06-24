import React from "react";
import { CardBody, Table } from "reactstrap";
import { KeyValPair } from "jack-hermanson-ts-utils";

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
                <Table className="card-table same-width table-striped mb-0">
                    <tbody>
                        {keyValPairs.map(kvp => (
                            <tr key={`${kvp.key}-${kvp.val}-${Math.random()}`}>
                                <th>{kvp.key}</th>
                                <td>{kvp.val}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </CardBody>
            {children && <CardBody>{children}</CardBody>}
        </React.Fragment>
    );
};
