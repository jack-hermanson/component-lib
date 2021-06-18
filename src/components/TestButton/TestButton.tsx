import React from "react";
import { Button } from "reactstrap";

interface Props {
    color: string;
    text: string;
    onClick?: () => any;
}

export const TestButton: React.FC<Props> = (props: Props) => {
    return (
        <Button color={props.color} onClick={props.onClick}>
            {props.text}
        </Button>
    );
};
