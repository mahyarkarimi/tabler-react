import React, { useMemo, CSSProperties, cloneElement } from 'react';
import { AvatarListProps, AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({
    className,
    style,
    shape = 'default',
    size,
    status,
    image,
    color,
    light,
    children
}) => {

    const classes = [
        'avatar',
        shape && `rounded-${shape}`,
        size ? `avatar-${size}` : 'default',
        color && `bg-${color}${light ? '-lt' : ''}`,
        className
    ].filter(Boolean).join(' ');

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
        <span className={classes} style={Style}>
            {badge}
            {children && typeof children === 'function' ? children({ className: 'avatar-icon' }) : children}
        </span>
    )
}

export const AvatarList = ({
    stacked,
    className,
    avatars
}: AvatarListProps) => {
    const classes = [
        'avatar-list',
        stacked && 'avatar-list-stacked',
        className
    ].filter(Boolean).join(' ');
    return (
        <div className={classes}>
            {avatars}
        </div>
    )
}

export default Avatar;
