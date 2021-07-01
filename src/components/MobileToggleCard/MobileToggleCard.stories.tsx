import { MobileToggleCard } from "./MobileToggleCard";
import { storiesOf } from "@storybook/react";
import React from "react";
import { CardBody } from "reactstrap";

const stories = storiesOf("MobileToggleCard", module);

stories.add("default", () => {
    return (
        <MobileToggleCard cardTitle={"Toggle!"}>
            <CardBody>
                <p className="mb-0">This is the card body.</p>
            </CardBody>
        </MobileToggleCard>
    );
});
