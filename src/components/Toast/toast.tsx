import React, { CSSProperties, PropsWithChildren, createElement, createRef, useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface ToastProps {
    id: string;
    onClose: () => void;
    onEnded?: () => void;
    header?: React.ReactNode;
    children?: React.ReactNode;
    duration?: 'infinity' | number;
}

const Toast = ({
    onClose,
    header,
    children,
    duration = 'infinity',
    onEnded,
}: ToastProps) => {
    const ref = createRef<HTMLDivElement>();
    const [visible, setVisible] = useState(false);
    const classes = useMemo(() => {
        return [
            'toast',
            'fade',
            visible && 'show',
        ].filter(Boolean).join(' ');
    }, [visible]);

    useEffect(() => {
        setVisible(true);
        if (typeof duration === 'number') {
            const t = setTimeout(() => {
                console.log('on timeout')
                // onClose && onClose();
                onEnded && onEnded();
            }, duration * 1000);
            return () => {
                clearTimeout(t)
            }
        }
    }, []);

    return (
        <div ref={ref} style={{ display: 'block' }} className={classes} role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false" data-bs-toggle="toast">
            <div className="toast-header">
                <div className="flex-fill">{header}</div>
                <button onClick={onClose} type="button" className="ms-2 btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {children}
            </div>
        </div>
    )
}

const ToastStack: React.FC<PropsWithChildren> = ({
    children,
}) => {
    return (
        <div className="toast-container">
            {children}
        </div>
    )
}

export const useToast = () => {
    const [toasts, setToasts] = useState<{[key: string]: ToastProps & { duration?: 'infinity' | number, startedAt: number }}>({});
    const [now, setNow] = useState<number>(Date.now());

    const onCloseAndRemove = useCallback((id: string, { onClose }: Pick<ToastProps, 'onClose'>) => {
        onClose && onClose();
        setTimeout(() => {
            const copyOfToasts = {...toasts};
            delete copyOfToasts[id];
            setToasts({ ...copyOfToasts });
        }, 300);
    }, [toasts]);

    useEffect(() => {
        const timedOut = Object.keys(toasts).filter((id) => {
            const t = toasts[id];
            return typeof t.duration === 'number' && now > t.startedAt + t.duration*1000
        })
        if (timedOut.length > 0) {
            timedOut.map((id) => onCloseAndRemove(id, { onClose: toasts[id].onClose }))
        }
    }, [now]);

    const toast = (props: ToastProps & { duration?: 'infinity' | number }) => {
        const id = Date.now().toString();
        setToasts({...toasts, [id]: { ...props, startedAt: Date.now() }});
    }
    
    return [toast, <ToastStack >{Object.keys(toasts).map((id) => {
        const { children, onClose, ...props } = toasts[id];
        return <Toast {...props} key={id} onEnded={() => setNow(Date.now())} onClose={() => onCloseAndRemove(id, { onClose })}>{children}</Toast>;
    })}</ToastStack>];
}

export default useToast;
