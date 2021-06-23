import React from "react";
import { Col, Nav, NavItem, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

interface Props {
    links: {
        path: string;
        text: string;
        exact?: boolean;
    }[];
}

export const NavTabs: React.FC<Props> = ({ links }: Props) => {
    return (
        <Row>
            <Col>
                <Nav className="mb-2" tabs>
                    {links.map(link => (
                        <NavItem key={link.path}>
                            <NavLink
                                exact={link.exact}
                                className="nav-link"
                                to={link.path}
                            >
                                {link.text}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </Col>
        </Row>
    );
};
