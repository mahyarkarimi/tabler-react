import React, { HTMLAttributes } from "react";
import { Colors } from "../colors";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    color?: Colors;
    position?: 'left' | 'right' | 'center';
};

const Divider = ({
    children,
    color,
    position,
    ...props
}: DividerProps) => {
    const classes = [
        'hr-text',
        position !== 'center' && `hr-text-${position}`,
        color && `text-${color}`,
    ].filter(Boolean).join(' ');

    return (
        <div {...props} className={classes}>{children}</div>
    )
}

export default Divider;
