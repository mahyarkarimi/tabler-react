import React, { useMemo } from 'react';
import type { CSSProperties } from 'react';
import { Colors } from '../colors';

export interface BadgesProps {
    className?: string;
    color?: Colors | 'secondary';
    textColor?: Colors;
    mode: 'outline' | 'pill';
    style?: CSSProperties;
    children?: any;
    light?: boolean;
}
const Badges: React.FC<BadgesProps> = ({
    className,
    color,
    mode,
    style,
    textColor,
    light,
    children
}) => {

    const classes = [
        'badge',
        textColor && `text-${textColor}`,
        color && `bg-${color}${light ? '-lt' : ''}`,
        mode && `badge-${mode}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <span className={classes} style={style}>{children}</span>
    )
}

export default Badges;
