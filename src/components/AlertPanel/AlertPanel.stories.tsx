import React from "react";
import { AlertPanel } from "./AlertPanel";
import { storiesOf } from "@storybook/react";
import { AlertType } from "jack-hermanson-ts-utils";

const stories = storiesOf("AlertPanel", module);

const alerts: AlertType[] = [
    {
        text: "Test text.",
        color: "danger",
    },
    {
        children: (
            <div>
                <p>First paragraph.</p>
                <p>Second paragraph.</p>
            </div>
        ),
        color: "success",
    },
];

stories.add("regular error", () => {
    return (
        <AlertPanel
            alert={alerts[0]}
            removeAlert={() => console.log("clicked remove")}
        />
    );
});

stories.add("advanced success", () => {
    return (
        <AlertPanel alert={alerts[1]} removeAlert={() => console.log("ok")} />
    );
});
