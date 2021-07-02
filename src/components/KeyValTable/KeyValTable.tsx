import React from "react";
import { Table } from "reactstrap";
import { KeyValPair } from "jack-hermanson-ts-utils";

interface Props {
    keyValPairs: KeyValPair[];
    className?: string;
    striped?: boolean;
}

export const KeyValTable: React.FC<Props> = ({
    className,
    striped = true,
    keyValPairs,
}: Props) => {
    return (
        <Table
            striped={striped}
            className={`${className ? className : ""} same-width`}
        >
            <tbody>
                {keyValPairs.map(kvp => (
                    <tr key={`${kvp.key}-${kvp.val}-${Math.random()}`}>
                        <th>{kvp.key}</th>
                        <td>{kvp.val}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};
