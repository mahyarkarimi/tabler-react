import React, { CSSProperties, HTMLAttributes, useMemo } from 'react';
import { IconCheck, IconInfoCircle, IconAlertTriangle, IconAlertCircle, TablerIconsProps } from '@tabler/icons-react';
import _ from 'lodash';

export interface AlertProps {
    dismissible?: boolean;
    important?: boolean;
    mode?: 'success' | 'info' | 'warning' | 'danger';
}

const Alert: React.FC<AlertProps & HTMLAttributes<HTMLDivElement> & CSSProperties> = ({
    dismissible,
    important,
    mode = 'info',
    children,
    className,
    style,
    ...props
}) => {

    const classes = [
        'alert',
        mode && `alert-${mode}`,
        dismissible && `alert-dismissible`,
        important && `alert-important`,
        className
    ].filter(Boolean).join(' ');

    const iconProps: TablerIconsProps = {
        size: 24,
    }

    let Icon;
    switch (mode) {
        case 'danger':
            Icon = IconAlertCircle;
            break;
        case 'success':
            Icon = IconCheck;
            break;
        case 'warning':
            Icon = IconAlertTriangle;
            break;
        default:
            Icon = IconInfoCircle;
    }
    return (
        <div {...props} role='alert' className={classes}>
            <div className='d-flex'>
                <div className='alert-icon'>
                    <Icon {...iconProps} />
                </div>
                {children}
            </div>
            {dismissible && <a className="btn-close" data-bs-dismiss="alert" aria-label="close"></a>}
        </div>
    )
}

export const AlertTitle = ({
    className,
    children
}: { className?: string; children: any }) => (
    <h4 className={`alert-title ${className}`}>{children}</h4>
)

export const AlertText = ({
    className,
    children
}: { className?: string; children: any }) => (
    <div className={`text-muted ${className}`}>{children}</div>
)

export const AlertLink = ({
    className,
    children,
    href
}: { className?: string; children: any; href?: string }) => (
    <a className={`alert-link ${className}`} href={href}>{children}</a>
)

export default Alert;
