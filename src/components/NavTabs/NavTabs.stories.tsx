import React from "react";
import { storiesOf } from "@storybook/react";
import { NavTabs } from "./NavTabs";
import { BrowserRouter } from "react-router-dom";

const stories = storiesOf("NavTabs", module);

stories.add("default", () => {
    return (
        <BrowserRouter>
            <NavTabs
                links={[
                    { path: "/", text: "Link One" },
                    { path: "/2", text: "Link Two" },
                ]}
            />
        </BrowserRouter>
    );
});
