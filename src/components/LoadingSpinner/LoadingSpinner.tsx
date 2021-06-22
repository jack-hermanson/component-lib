import React from "react";
import Loader from "react-loader-spinner";

interface Props {
    light?: boolean;
    className?: string;
}

export const LoadingSpinner: React.FC<Props> = ({
    className,
    light = true,
}) => {
    return (
        <div className={className}>
            <Loader type="ThreeDots" color={light ? "white" : "black"} />
        </div>
    );
};
