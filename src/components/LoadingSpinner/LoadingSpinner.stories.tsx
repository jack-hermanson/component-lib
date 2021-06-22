import React from "react";
import { storiesOf } from "@storybook/react";
import { LoadingSpinner } from "./LoadingSpinner";

const stories = storiesOf("LoadingSpinner", module);

stories.add("default", () => {
    return <LoadingSpinner className="bg-dark" />;
});
