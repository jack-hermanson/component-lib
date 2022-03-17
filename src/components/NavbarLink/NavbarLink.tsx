import React, { FunctionComponent, ReactNode } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";

interface Props {
    to: string;
    onClick?: () => any;
    icon?: ReactNode;
    text: string;
    activePaths?: string[];
}

export const NavbarLink: FunctionComponent<Props> = ({
    to,
    onClick,
    icon,
    text,
    activePaths,
}: Props) => {
    const { pathname } = useLocation();

    return (
        <NavItem>
            <NavLink
                isActive={isActive}
                to={to}
                onClick={onClick}
                className="nav-link d-flex"
            >
                {icon}
                {text}
            </NavLink>
        </NavItem>
    );

    function isActive(): boolean {
        const pathsToMatch = activePaths || [to];
        return pathsToMatch.some(path => pathname.startsWith(path));
    }
};
