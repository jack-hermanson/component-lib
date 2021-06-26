import React from "react";
import { ActionsDropdown } from "./ActionsDropdown";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import {
    ClickDropdownAction,
    DropdownAction,
    LinkDropdownAction,
} from "jack-hermanson-ts-utils";

const stories = storiesOf("ActionsDropdown", module);

stories.add("default", () => {
    const options: Array<DropdownAction | undefined> = [];

    options.push(new LinkDropdownAction("Some link", "/test"));
    options.push(undefined);
    options.push(
        new ClickDropdownAction("Some Click", () => console.log("click"))
    );

    return (
        <BrowserRouter>
            <ActionsDropdown size="sm" options={options} />
        </BrowserRouter>
    );
});
