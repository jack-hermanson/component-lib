import * as React from "react";
import { Button as ReactButton } from "reactstrap";

export type Props = {
    onClick?: () => void;
};

const Button: React.FC<Props> = ({ onClick }) => {
    return (
        <ReactButton onClick={onClick} color="primary">
            test
        </ReactButton>
    );
};

export default Button;
