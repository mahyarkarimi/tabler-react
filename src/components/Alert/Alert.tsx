import React, { useMemo } from 'react';
import { IconCheck, IconInfoCircle, IconAlertTriangle, IconAlertCircle, TablerIconProps} from '@tabler/icons';
import { AlertProps } from './types';

const Alert: React.FC<AlertProps> = ({
    className,
    dismissible,
    important,
    mode = 'info',
    children
}) => {

    const classes = [
        'alert',
        mode && `alert-${mode}`,
        dismissible && `alert-dismissible`,
        important && `alert-important`,
        className
    ].filter(Boolean).join(' ');

    const iconProps: TablerIconProps = {
        size: 24,
    }

    let Icon; 
    switch(mode){
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
        <div role='alert' className={classes}>
            <div className='d-flex'>
                <div className='alert-icon'>
                    <Icon {...iconProps}/>
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
}: {className?: string; children: any}) => (
    <h4 className={`alert-title ${className}`}>{children}</h4>
)

export const AlertText = ({
    className,
    children
}: {className?: string; children: any}) => (
    <div className={`text-muted ${className}`}>{children}</div>
)

export const AlertLink = ({
    className,
    children,
    href
}: {className?: string; children: any; href?: string}) => (
    <a className={`alert-link ${className}`} href={href}>{children}</a>
)

Alert.Title = AlertTitle;
Alert.Text = AlertText;
export default Alert;
