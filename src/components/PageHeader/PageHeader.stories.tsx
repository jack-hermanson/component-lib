import React from "react";
import { storiesOf } from "@storybook/react";

import { PageHeader } from "./PageHeader";
import { Button, Col, Row } from "reactstrap";

const stories = storiesOf("PageHeader", module);

stories.add("default", () => {
    return <PageHeader title="No Actions" />;
});

stories.add("actions", () => {
    return (
        <div>
            <Row>
                <Col>
                    <PageHeader title="Something or Other">
                        <Button size="sm" color="primary">
                            Test
                        </Button>
                    </PageHeader>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="lead">Some text.</p>
                </Col>
            </Row>
        </div>
    );
});

stories.add("no border", () => {
    return <PageHeader title="No border here" border={false} />;
});
