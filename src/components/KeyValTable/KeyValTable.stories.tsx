import React from "react";
import { KeyValTable } from "./KeyValTable";
import { storiesOf } from "@storybook/react";
import { KeyValPair } from "jack-hermanson-ts-utils";
import { Col, Row } from "reactstrap";
import { PageHeader } from "../PageHeader/PageHeader";

const stories = storiesOf("KeyValTable", module);

const values: KeyValPair[] = [
    { key: "Some key", val: "Some val" },
    { key: "Price", val: "$1" },
];

stories.add("default", () => {
    return (
        <Row>
            <Col>
                <PageHeader title="Some Page Header" />
                <KeyValTable keyValPairs={values} />
            </Col>
        </Row>
    );
});
