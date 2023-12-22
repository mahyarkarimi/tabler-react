import type { HTMLAttributes } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    dismissible?: boolean;
    important?: boolean;
    mode?: 'success' | 'info' | 'warning' | 'danger';
    customIcon?: React.ReactNode;
}