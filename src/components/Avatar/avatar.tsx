import React, { useMemo, CSSProperties, HTMLAttributes } from 'react';
import { Colors } from '../colors';

export interface AvatarProps {
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
    light?: boolean;
}

export interface AvatarListProps {
    stacked?: boolean;
}

const Avatar: React.FC<AvatarProps & HTMLAttributes<HTMLSpanElement>> = ({
    className,
    style,
    shape = 'default',
    size,
    status,
    image,
    color,
    light,
    skeleton,
    wave,
    children,
    ...props
}) => {

    const classes = [
        'avatar',
        shape && `rounded-${shape}`,
        size ? `avatar-${size}` : 'default',
        color && `bg-${color}${light ? '-lt' : ''}`,
        skeleton && 'placeholder',
        wave && `placeholder-wave`,
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
        <span {...props} className={classes} style={Style}>
            {badge}
            {children && typeof children === 'function' ? children({ className: 'avatar-icon' }) : children}
        </span>
    )
}

export const AvatarList: React.FC<AvatarListProps & HTMLAttributes<HTMLDivElement>> = ({
    stacked,
    className,
    children,
    ...props
}) => {
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
