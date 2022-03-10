import React from "react";
import { ActionCardHeader } from "./ActionCardHeader";
import { storiesOf } from "@storybook/react";
import { Button } from "reactstrap";
import { BrowserRouter } from "react-router-dom";

const stories = storiesOf("ActionCardHeader", module);

stories.add("default", () => {
    return <ActionCardHeader title="Some Title" />;
});

stories.add("with button", () => {
    return (
        <ActionCardHeader title="Another Title">
            <Button color="primary" size="sm">
                Test
            </Button>
        </ActionCardHeader>
    );
});

stories.add("with link", () => {
    return (
        <BrowserRouter>
            <ActionCardHeader title="Just a Link" linkTo="/test" />
        </BrowserRouter>
    );
});

stories.add("with link and button", () => {
    return (
        <BrowserRouter>
            <ActionCardHeader title="Link and Button" linkTo="/test">
                <Button color="primary" size="sm">
                    Test
                </Button>
            </ActionCardHeader>
        </BrowserRouter>
    );
});
