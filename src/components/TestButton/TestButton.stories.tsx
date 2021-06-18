import React from "react";
import { TestButton } from "./TestButton";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("TestButton", module);

stories.add("default", () => {
    return (
        <TestButton
            onClick={() => console.log("button clicked")}
            color="danger"
            text="red button"
        />
    );
});
