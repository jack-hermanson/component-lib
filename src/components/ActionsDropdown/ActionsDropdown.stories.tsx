import React from "react";
import { ActionsDropdown } from "./ActionsDropdown";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const stories = storiesOf("ActionsDropdown", module);

stories.add("default", () => {
    return (
        <BrowserRouter>
            <ActionsDropdown
                options={[
                    { type: "LinkItem", label: "Some Link", linkPath: "/test" },
                    undefined,
                    {
                        type: "OnClickItem",
                        label: "Some Click",
                        onClick: () => console.log("clicked"),
                    },
                ]}
            />
        </BrowserRouter>
    );
});
