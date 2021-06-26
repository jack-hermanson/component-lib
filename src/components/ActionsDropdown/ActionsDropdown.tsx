import React from "react";
import {
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";
import {
    ClickDropdownAction,
    DropdownAction,
    LinkDropdownAction,
} from "jack-hermanson-ts-utils";

interface Props {
    options: Array<DropdownAction | undefined>;
    menuName?: string;
    end?: boolean;
    size?: "sm" | "md" | "lg";
    color?: string;
}

export const ActionsDropdown: React.FC<Props> = ({
    options,
    menuName = "Actions",
    end = true,
    size = "md",
    color = "secondary",
}: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <ButtonDropdown isOpen={isOpen} toggle={() => setIsOpen(o => !o)}>
            <DropdownToggle color={color} size={size} caret>
                {menuName}
            </DropdownToggle>
            <DropdownMenu end={end}>
                {options.map((option, index) =>
                    option ? (
                        <React.Fragment key={`${option.label}-${index}`}>
                            {option instanceof ClickDropdownAction ? (
                                renderOnClick(option)
                            ) : option instanceof LinkDropdownAction ? (
                                renderLink(option)
                            ) : (
                                <React.Fragment />
                            )}
                        </React.Fragment>
                    ) : (
                        <DropdownItem key={index} divider />
                    )
                )}
            </DropdownMenu>
        </ButtonDropdown>
    );

    function renderLink(option: LinkDropdownAction) {
        return (
            <DropdownItem>
                <Link style={{ textDecoration: "none" }} to={option.linkPath}>
                    {option.label}
                </Link>
            </DropdownItem>
        );
    }

    function renderOnClick(option: ClickDropdownAction) {
        return (
            <DropdownItem onClick={option.onClick}>{option.label}</DropdownItem>
        );
    }
};
