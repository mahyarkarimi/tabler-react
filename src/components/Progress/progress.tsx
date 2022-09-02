import React from "react";
import { Colors } from "../colors";

export interface ProgressProps {
    value: number;
    small?: boolean;
    indeterminate?: boolean;
    color?: Colors;
}

const Progress: React.FC<ProgressProps & React.AllHTMLAttributes<HTMLDivElement>> = ({
    children,
    value,
    small,
    color,
    indeterminate,
    className,
    ...props
}) => {
    const classes = [
        'progress',
        small && 'progress-sm',
        className,
    ].filter(Boolean).join(' ');

    const progressClasses = [
        'progress-bar',
        indeterminate && 'progress-bar-indeterminate',
        color && `bg-${color}`
    ].filter(Boolean).join(' ')
    return (
        <div {...props} className={classes}>
            <div className={progressClasses} style={{ width: `${value}%` }} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={`${value}% Complete`}>
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
}
export default Progress;