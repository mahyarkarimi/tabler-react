import React, { HTMLAttributes } from "react";

export interface TooltipProps {
    placement?: 'top' | 'right' | 'bottom' | 'left';
    tooltip?: string;
}

const Tooltip: React.FC<TooltipProps & HTMLAttributes<HTMLButtonElement>> = ({
    children,
    placement,
    tooltip,
    ...props
}) => {

    const classes = [
        'btn',

    ].filter(Boolean).join(' ');
    return (
        <button {...props} type="button" className={classes} data-bs-toggle="tooltip" data-bs-placement={placement} title={tooltip}>
            {children}
        </button>
    )
}

export default Tooltip;
