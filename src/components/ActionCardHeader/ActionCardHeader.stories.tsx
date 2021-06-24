import React from "react";
import { ActionCardHeader } from "./ActionCardHeader";
import { storiesOf } from "@storybook/react";
import { Button } from "reactstrap";

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
