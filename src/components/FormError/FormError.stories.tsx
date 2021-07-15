import React from "react";
import { storiesOf } from "@storybook/react";
import { FormGroup, Input, Label } from "reactstrap";
import { FormError } from "./FormError";

const stories = storiesOf("FormError", module);

stories.add("default", () => {
    return (
        <FormGroup>
            <Label className="form-label required">Some Input</Label>
            <Input type="text" />
            <FormError>You must enter a value.</FormError>
        </FormGroup>
    );
});
