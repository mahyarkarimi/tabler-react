import React, { HTMLAttributes, useMemo } from "react";
import { Colors } from "../colors";

export interface StatusProps extends HTMLAttributes<HTMLDivElement> {
    color?: Colors;
    withDot?: boolean;
    lite?: boolean;
}

export interface StatusDotProps {
    color?: Colors;
    animatedDot?: boolean
}

export interface StatusIndicatorProps {
    color: Colors;
}

export const StatusDot = ({ color, animatedDot }: StatusDotProps) => {
    const classes = useMemo(() => {
        return [
            `status-dot`,
            color && `status-${color}`, ,
            animatedDot && `status-dot-animated`
        ].filter(Boolean).join(' ')
    }, [color, animatedDot]);

    return (
        <span className={classes}></span>
    )
}

const Status = ({
    children,
    className,
    color,
    withDot,
    animatedDot,
    lite,
    ...props
}: StatusProps & StatusDotProps) => {
    const classes = [
        'status',
        color && `status-${color}`,
        lite && 'status-lite',
        className
    ].filter(Boolean).join(' ');

    return (
        <div {...props} className={classes}>
            {withDot && <StatusDot animatedDot={animatedDot} color={color} />}
            {children}
        </div>
    )
}


export const StatusIndicator = ({
    color
}: StatusIndicatorProps) => {
    return (
        <div className={`status-indicator status-${color} status-indicator-animated`}>
            <span className="status-indicator-circle"></span>
            <span className="status-indicator-circle"></span>
            <span className="status-indicator-circle"></span>
        </div>
    )
}
export default Status;
