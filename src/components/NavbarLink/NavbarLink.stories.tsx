import React from "react";
import { storiesOf } from "@storybook/react";
import { NavbarLink } from "./NavbarLink";
import { BrowserRouter } from "react-router-dom";
import { Nav, Navbar } from "reactstrap";

const stories = storiesOf("NavbarLink", module);

stories.add("default", () => {
    return (
        <BrowserRouter>
            <Navbar>
                <Nav navbar>
                    <NavbarLink to={"/test"} text={"Test Link"} />
                </Nav>
            </Navbar>
        </BrowserRouter>
    );
});
