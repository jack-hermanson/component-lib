import * as React from "react";
import { Button as ReactButton } from "reactstrap";

export type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    color?: string;
    type?: string;
    disabled?: boolean;
};

const Button: React.FC<Props> = ({
    children,
    onClick = () => {},
    disabled = false,
    type = "submit",
}) => {
    const handleClick = () => {
        if (!disabled && onClick) onClick();
    };

    const rootProps = {
        type,
        onClick: handleClick,
        disabled,
    };

    return <ReactButton color="primary">test</ReactButton>;
};

export default Button;
