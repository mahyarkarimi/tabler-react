import React from "react";

export interface ToastProps {
    visible?: boolean;
    onClose?: () => void;
    header?: React.ReactFragment;
}

const Toast: React.FC<ToastProps> = ({
    visible,
    onClose,
    header,
    children
}) => {
    const classes = [
        'toast',
        visible && 'show',
    ].filter(Boolean).join(' ');

    return (
        <div className={classes} role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false" data-bs-toggle="toast">
            <div className="toast-header">
                {header}
                <button onClick={() => onClose && onClose()} type="button" className="ms-2 btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {children}
            </div>
        </div>
    )
}

export const ToastStack: React.FC = ({
    children
}) => {
    return (
        <div className="toast-container">
            {children}
        </div>
    )
}

export default Toast;
