import React, { HTMLAttributes } from "react";
import { Colors } from "../colors";

export interface StatusProps {
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

export const StatusDot: React.FC<StatusDotProps> = ({ color, animatedDot }) => {
    const classes = [
        `status-dot`,
        color && `status-${color}`, ,
        animatedDot && `status-dot-animated`
    ].filter(Boolean).join(' ');
    return (
        <span className={classes}></span>
    )
}

const Status: React.FC<StatusProps & StatusDotProps & HTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    color,
    withDot,
    animatedDot,
    lite,
    ...props
}) => {
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


export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
    color
}) => {
    return (
        <div className={`status-indicator status-${color} status-indicator-animated`}>
            <span className="status-indicator-circle"></span>
            <span className="status-indicator-circle"></span>
            <span className="status-indicator-circle"></span>
        </div>
    )
}
export default Status;
