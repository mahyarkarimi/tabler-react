import React from "react";
import { Colors } from "../colors";

export interface LineSkeletonProps {
    span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    size?: 'default' | 'xs' | 'lg' | 'sm';
    color?: Colors;
    wave?: boolean;
}
const LineSkeleton = ({
    span,
    size,
    color,
    wave
}: LineSkeletonProps) => {
    const classes = [
        'placeholder',
        `col-${span}`,
        color && `bg-${color}`,
        size !== 'default' && `placeholder-${size}`,
        wave && `placeholder-wave`
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}></div>
    )
}

export default LineSkeleton;