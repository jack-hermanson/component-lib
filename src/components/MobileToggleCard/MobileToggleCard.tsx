import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
    cardTitle: string;
    children: React.ReactNode;
    className?: string;
}

export const MobileToggleCard: React.FC<Props> = ({
    cardTitle,
    children,
    className,
}: Props) => {
    const [showBody, setShowBody] = useState(false);

    return (
        <Card className={className ? className : ""}>
            <CardHeader onClick={() => setShowBody(f => !f)}>
                <h5 className="mb-0">
                    {cardTitle}
                    <FA
                        className="d-lg-none ms-2 hover-mouse"
                        icon={showBody ? faCaretUp : faCaretDown}
                    />
                </h5>
            </CardHeader>
            <div className={`${showBody ? "" : "d-none"} d-lg-block`}>
                {children}
            </div>
        </Card>
    );
};
