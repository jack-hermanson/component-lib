import React from "react";
import { KeyValCardBody } from "./KeyValCardBody";
import { storiesOf } from "@storybook/react";
import { KeyValPair } from "jack-hermanson-ts-utils";
import { Card, CardHeader } from "reactstrap";

const stories = storiesOf("KeyValCardBody", module);

const keyValPairs: KeyValPair[] = [
    { key: "First key", val: 1 },
    { key: "Second key", val: "Okay" },
];

stories.add("default", () => {
    return (
        <Card>
            <CardHeader>Some header</CardHeader>
            <KeyValCardBody keyValPairs={keyValPairs} />
        </Card>
    );
});

stories.add("nested", () => {
    return (
        <Card>
            <CardHeader>Some header</CardHeader>
            <KeyValCardBody keyValPairs={keyValPairs}>
                <p className="mb-0">Some paragraph text.</p>
            </KeyValCardBody>
        </Card>
    );
});
