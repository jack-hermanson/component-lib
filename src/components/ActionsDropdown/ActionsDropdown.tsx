import React from "react";
import {
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";

interface BaseItemType {
    label: string;
}

interface OnClickItem extends BaseItemType {
    type: "OnClickItem";
    onClick: () => any;
}

interface LinkItem extends BaseItemType {
    type: "LinkItem";
    linkPath: string;
}

interface Props {
    options: Array<OnClickItem | LinkItem | undefined>;
    menuName?: string;
    right?: boolean;
}

export const ActionsDropdown: React.FC<Props> = ({
    options,
    menuName = "Actions",
    right = true,
}: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <ButtonDropdown isOpen={isOpen} toggle={() => setIsOpen(o => !o)}>
            <DropdownToggle caret>{menuName}</DropdownToggle>
            <DropdownMenu right={right}>
                {options.map((option, index) =>
                    option ? (
                        <React.Fragment key={`${option.label}-${index}`}>
                            {option.type === "OnClickItem" ? (
                                renderOnClick(option)
                            ) : option.type === "LinkItem" ? (
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

    function renderLink(option: LinkItem) {
        return (
            <DropdownItem>
                <Link style={{ textDecoration: "none" }} to={option.linkPath}>
                    {option.label}
                </Link>
            </DropdownItem>
        );
    }

    function renderOnClick(option: OnClickItem) {
        return (
            <DropdownItem onClick={option.onClick}>{option.label}</DropdownItem>
        );
    }
};
