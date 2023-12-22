import React, { HTMLAttributes, useMemo, useState } from "react";
import { Colors } from "../colors";
import './styles.css';

export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
    steps: {
        label?: string,
        tooltip?: string;
    }[],
    color?: Colors;
    withNumber?: boolean;
    defaultActiveStep?: number;
}
const Steps = ({
    className,
    steps,
    color,
    withNumber,
    defaultActiveStep,
    ...props
}: StepsProps) => {
    const [active, setActive] = useState(defaultActiveStep || 0);
    const classes = useMemo(() => {
        return [
            'steps',
            color && `steps-${color}`,
            withNumber && 'steps-counter',
            className
        ].filter(Boolean).join(' ');
    }, [color, withNumber, className]);

    return (
        <div {...props} className={classes}>
            {steps.map((step, index) => (
                <a key={index} onClick={() => setActive(index)} className={`step-item ${active === index ? 'active' : ''}`} {...(step.tooltip ? { "data-bs-toggle": "tooltip", title: step.tooltip } : {})}>
                    {step.label}
                </a>
            ))}
        </div>
    )
}
export default Steps;