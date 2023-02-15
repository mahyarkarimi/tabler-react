import React from "react";
import { Colors } from "../colors";

export interface DividerProps {
    children?: any;
    color?: Colors;
    position?: 'left' | 'right' | 'center';
};

const Divider: React.FC<DividerProps & React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    color,
    position,
    ...props
}) => {
    const classes = [
        'hr-text',
        position !== 'center' && `hr-text-${position}`,
        color && `text-${color}`,
    ].filter(Boolean).join(' ');

    return (
        <div  {...props} className={classes}>{children}</div>
    )
}

export default Divider;
