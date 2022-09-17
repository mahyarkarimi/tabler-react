import React, { HTMLAttributes, useState } from "react";
import { Colors } from "../colors";

export interface StepsProps {
    steps: {
        label?: string,
        tooltip?: string;
    }[],
    color?: Colors;
    withNumber?: boolean;
    defaultActiveStep?: number;
}
const Steps: React.FC<StepsProps & HTMLAttributes<HTMLDivElement>> = ({
    className,
    steps,
    color,
    withNumber,
    defaultActiveStep,
    ...props
}) => {
    const [active, setActive] = useState(defaultActiveStep || 0);
    const classes = [
        'steps',
        color && `steps-${color}`,
        withNumber && 'steps-counter',
        className
    ].filter(Boolean).join(' ');

    return (
        <div {...props} className={classes}>
            {steps.map((step, index) => (
                <a key={index} onClick={() => setActive(index)} className={`step-item${active === index ? ' active' : ''}`} {...(step.tooltip ? { "data-bs-toggle": "tooltip", title: step.tooltip } : {})}>
                    {step.label}
                </a>
            ))}
        </div>
    )
}
export default Steps;