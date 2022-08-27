import type { CSSProperties } from 'react';

export interface AlertProps {
    className?: string;
    dismissible?: boolean;
    important?: boolean;
    mode?: 'success' | 'info' | 'warning' | 'danger';
    children?: any
}