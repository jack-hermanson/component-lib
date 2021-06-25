import React from "react";
import { ConfirmationModal } from "./ConfirmationModal";
import { storiesOf } from "@storybook/react";
import { Button } from "reactstrap";

const stories = storiesOf("ConfirmationModal", module);

stories.add("default", () => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <React.Fragment>
            <Button color="primary" onClick={() => setIsOpen(true)}>
                Toggle
            </Button>
            <ConfirmationModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                title={"Some Modal"}
                onConfirm={() => console.log("confirm")}
            >
                <p className="mb-0">Are you sure you want to do that?</p>
            </ConfirmationModal>
        </React.Fragment>
    );
});
