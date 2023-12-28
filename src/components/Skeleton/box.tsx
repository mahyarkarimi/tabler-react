import React from "react";
import { Colors } from "../colors";

export interface BoxSkeletonProps {
    ratio: '1x1' | '4x3' | '16x9' | '3x4' | '9x16' | '21x9' | '9x21';
    color?: Colors;
    wave?: boolean;
}
const BoxSkeleton = ({
    ratio,
    color,
    wave
}: BoxSkeletonProps) => {
    const classes = [
        'placeholder',
        'ratio',
        color && `bg-${color}`,
        ratio && `ratio-${ratio}`,
        wave && `placeholder-wave`
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            <div className="placeholder-image"></div>
        </div>
    )
}

export default BoxSkeleton;