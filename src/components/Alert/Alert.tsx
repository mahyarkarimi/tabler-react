import React, { PropsWithChildren, useMemo } from 'react';
import _ from 'lodash';
import { AlertProps } from './types';

const Alert = ({
    dismissible,
    important,
    mode = 'info',
    children,
    className,
    style,
    customIcon,
    ...props
}: AlertProps) => {

    const classes = [
        'alert',
        mode && `alert-${mode}`,
        dismissible && `alert-dismissible`,
        important && `alert-important`,
        className
    ].filter(Boolean).join(' ');


    const Icon = useMemo(() => {
        if (customIcon) return customIcon;
        let icon;
        switch (mode) {
            case 'danger':
                icon = 'ti ti-alert-circle';
                break;
            case 'success':
                icon = 'ti ti-check';
                break;
            case 'warning':
                icon = 'ti ti-alert-triangle';
                break;
            case 'info':
                icon = 'ti ti-info-circle';
        }
        return (
            <div className='alert-icon'>
                <i className={icon} style={{ fontSize: '24px' }} />
            </div>
        )
    }, [mode, customIcon]);

    return (
        <div {...props} role='alert' className={classes}>
            <div className='d-flex '>
                {Icon}
                {children}
            </div>
            {dismissible && <a className="btn-close" data-bs-dismiss="alert" aria-label="close"></a>}
        </div>
    )
}

export const AlertTitle = ({
    className,
    children
}: { className?: string } & PropsWithChildren) => (
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
}: { className?: string; href?: string } & PropsWithChildren) => (
    <a className={`alert-link ${className}`} href={href}>{children}</a>
)

export default Alert;
