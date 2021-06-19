import React from "react";
import { AlertType } from "jack-hermanson-ts-utils";
import { Alert } from "reactstrap";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
    alert: AlertType;
    removeAlert: () => any;
}

export const AlertPanel: React.FC<Props> = ({ alert, removeAlert }: Props) => {
    return (
        <Alert
            color={alert.color}
            fade={false}
            className="d-flex"
            onClick={() => removeAlert()}
        >
            {renderText()}
            <span className="ms-auto hover-mouse">
                <FA icon={faTimes} />
            </span>
        </Alert>
    );

    function renderText() {
        if (
            (alert.children && alert.text) ||
            (!alert.children && !alert.text)
        ) {
            throw new Error(
                "Alert must have text or children props, but not both."
            );
        }

        if (alert.text) {
            return <p className="mb-0">{alert.text}</p>;
        }

        return alert.children;
    }
};
