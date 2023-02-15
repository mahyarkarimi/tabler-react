import React, { HTMLAttributes, useEffect, useState } from "react";
import { IconCircleCheck, IconAlertTriangle } from '@tabler/icons-react';
import { Colors } from "../colors";
export interface ModalProps {
    title?: string;
    onClose?: () => void;
    footer?: React.ReactNode;
    show?: boolean;
    fullWidth?: boolean;
    scollable?: boolean;
    size?: 'lg' | 'sm' | 'default';
    statusColor?: Colors;
}

const Modal: React.FC<ModalProps & HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    title,
    footer,
    show,
    style,
    onClose,
    fullWidth,
    scollable,
    statusColor,
    size = 'default',
    ...props
}) => {
    const [Style, setStyle] = useState(style || {});
    const [visible, setVisible] = useState<boolean>();
    const classes = [
        'modal',
        'modal-blur',
        'fade',
        className,
    ].filter(Boolean).join(' ');
    const innerClasses = [
        'modal-dialog',
        'modal-dialog-centered',
        ['lg', 'sm'].includes(size) && `modal-${size}`,
        fullWidth && 'modal-full-width',
        scollable && 'modal-dialog-scrollable',

    ].filter(Boolean).join(' ');

    const otherProps: HTMLAttributes<HTMLDivElement> = {};
    if (show) {
        otherProps['aria-modal'] = "true";
        otherProps['role'] = "dialog";
    } else {
        otherProps['aria-hidden'] = "true";
    }

    useEffect(() => {
        if (show) {
            setStyle({ ...Style, display: 'block' });
            setTimeout(() => {
                setVisible(true)
            }, 0.15 * 1000)
        } else {
            setVisible(false);
            setTimeout(() => {
                setStyle({ ...Style, display: 'none' })
            }, 0.15 * 1000)
        }
    }, [show])

    return (
        <div
            {...props}
            style={Style}
            className={`${classes} ${visible ? 'show' : ''}`}
            tabIndex={-1}
            {...otherProps}>
            <div className={innerClasses} role="document">
                <div className="modal-content">
                    {statusColor && <div className={`modal-status bg-${statusColor}`}></div>}
                    <div className="modal-header">
                        {title && <h5 className="modal-title">{title}</h5>}
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    {footer && <div className="modal-footer">
                        {footer}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export interface AlertModalProps {
    title: string;
    message: string;
    cancelText?: string;
    okText?: string;
    onConfirm?: (ev: any) => void;
    onCancel?: (ev: any) => void;
}

export const AlertModal: React.FC<AlertModalProps & ModalProps> = ({
    title,
    message,
    cancelText,
    okText,
    onCancel,
    onConfirm,
    ...props
}) => {
    const footer = (
        <div className="w-100">
            <div className="row">
                <div className="col" onClick={onCancel}>
                    <a href="#" className="btn w-100" data-bs-dismiss="modal">
                        {cancelText || 'Cancel'}
                    </a>
                </div>
                <div className="col" onClick={onConfirm}>
                    <a href="#" className="btn btn-danger w-100" data-bs-dismiss="modal">
                        {okText || 'Confirm'}
                    </a>
                </div>
            </div>
        </div>
    )
    return (
        <Modal {...props} footer={footer} statusColor='danger'>
            <div className="text-center">
                <IconAlertTriangle className="icon mb-2 text-danger icon-lg" />
                <h3>{title}</h3>
                <div className="text-muted">
                    {message}
                </div>
            </div>
        </Modal>
    )
}

export const SuccessModal: React.FC<AlertModalProps & ModalProps> = ({
    title,
    message,
    cancelText,
    okText,
    onCancel,
    onConfirm,
    ...props
}) => {
    const footer = (
        <div className="w-100">
            <div className="row">
                <div className="col" onClick={onCancel}>
                    <a href="#" className="btn w-100" data-bs-dismiss="modal">
                        {cancelText || 'Cancel'}
                    </a>
                </div>
                <div className="col" onClick={onConfirm}>
                    <a href="#" className="btn btn-success w-100" data-bs-dismiss="modal">
                        {okText || 'Confirm'}
                    </a>
                </div>
            </div>
        </div>
    )
    return (
        <Modal {...props} footer={footer} statusColor='success'>
            <div className="text-center" >
                <IconCircleCheck className="icon mb-2 text-green icon-lg" />
                <h3>{title}</h3>
                <div className="text-muted">
                    {message}
                </div>
            </div>
        </Modal>
    )
}
export default Modal;
