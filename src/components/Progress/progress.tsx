import React, { useMemo } from "react";
import { Colors } from "../colors";

export interface ProgressProps extends React.AllHTMLAttributes<HTMLDivElement> {
    value: number;
    small?: boolean;
    indeterminate?: boolean;
    color?: Colors;
}

const Progress = ({
    children,
    value,
    small,
    color,
    indeterminate,
    className,
    ...props
}: ProgressProps) => {
    const classes = useMemo(() => {
        return [
            'progress',
            small && 'progress-sm',
            className,
        ].filter(Boolean).join(' ')
    }, [small, className]);

    const progressClasses = useMemo(() => {
        return [
            'progress-bar',
            indeterminate && 'progress-bar-indeterminate',
            color && `bg-${color}`
        ].filter(Boolean).join(' ')
    }, [indeterminate, color]);
    
    return (
        <div {...props} className={classes}>
            <div className={progressClasses} style={{ width: `${value}%` }} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={`${value}% Complete`}>
                <span className="visually-hidden"></span>
            </div>
        </div>
    )
}
export default Progress;