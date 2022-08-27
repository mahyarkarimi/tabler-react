import type { CSSProperties } from 'react';
import { Colors } from '../colors';

export interface SpinnerProps {
    role: 'status';
    className: string;
    color: Colors;
    size: 'large' | 'small' | 'default'
    children: any
}