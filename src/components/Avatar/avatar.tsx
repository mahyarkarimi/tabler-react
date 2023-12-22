import React, { useMemo, CSSProperties, HTMLAttributes } from 'react';
import { Colors } from '../colors';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    shape?: 'circle' | 'default' | Number;
    size?: 'xl' | 'lg' | 'default' | 'md' | 'sm' | 'xs',
    image?: any;
    status?: {
        indicator: 'info' | 'warning' | 'danger' | 'success'| 'grey',
        count?: Number,
    },
    color?: Colors;
    skeleton?: boolean;
    wave?: boolean;
}

export interface AvatarListProps extends HTMLAttributes<HTMLDivElement> {
    stacked?: boolean;
}

const Avatar = ({
    className,
    style,
    shape = 'default',
    size,
    status,
    image,
    color,
    skeleton,
    wave,
    children,
    ...props
}: AvatarProps) => {

    const classes = useMemo(() => {
        return [
            'avatar',
            shape && `rounded-${shape}`,
            size !== 'default' ? `avatar-${size}` : false,
            color && `bg-${color}`,
            skeleton && 'placeholder',
            wave && `placeholder-wave`,
            className
        ].filter(Boolean).join(' ')
    }, [shape, size, color, skeleton, wave, className]);

    const Style: CSSProperties = {
        ...style,
        ...(image && { backgroundImage: `url(${image})` })
    }

    const badge = useMemo(() => {
        if (!status) {
            return ''
        }
        const { indicator, count } = status;
        return <span className={`badge bg-${indicator}`}>{count?.toString()}</span>;
    }, [status]);

    return (
        <span {...props} className={classes} style={Style}>
            {badge}
            {children}
        </span>
    )
}

export const AvatarList = ({
    stacked,
    className,
    children,
    ...props
}: AvatarListProps) => {
    const classes = [
        'avatar-list',
        stacked && 'avatar-list-stacked',
        className
    ].filter(Boolean).join(' ');
    return (
        <div {...props} className={classes}>
            {children}
        </div>
    )
}

export default Avatar;
