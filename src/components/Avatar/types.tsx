import type { CSSProperties } from 'react';
import type { Colors } from '../colors';
import Avatar from './avatar';

export interface AvatarProps {
    className?: string;
    style?: CSSProperties;
    shape?: 'circle' | 'default' | Number;
    size?: 'xl' | 'lg' | 'default' | 'md' | 'sm' | 'xs',
    image?: any;
    status?: {
        indicator: 'info' | 'warning' | 'danger' | 'success'| 'grey',
        count?: Number,
    },
    color?: Colors;
    children?: any;
    light?: boolean;
}

export interface AvatarListProps {
    avatars?: typeof Avatar[]
    stacked?: boolean
    className?: string;
}