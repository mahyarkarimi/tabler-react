import React, { HTMLAttributes, useState } from "react";

export interface TooltipProps {
    placement?: 'top' | 'right' | 'bottom' | 'left';
    tooltip?: string;
}

const Tooltip: React.FC<TooltipProps & HTMLAttributes<HTMLButtonElement>> = ({
    children,
    placement,
    tooltip,
    className,
    ...props
}) => {
    const [_tooltip, setTooltip] = useState<React.ReactNode>();
    const classes = [
        'btn',
        className,
    ].filter(Boolean).join(' ');

    const onMouseEnter = (ev: React.MouseEvent<HTMLButtonElement>) => {
        const { onMouseEnter: _onMouseEnter } = props;

        setTooltip(
            <div
                className={`tooltip bs-tooltip-${placement} fade show`}
                style={{ position: 'absolute', transform: `translate(0px,-36px)` }}
                role="tooltip">
                {placement === 'top' && <div className="tooltip-arrow" style={{ position: 'absolute', transform: 'translate(50%,0px)'}}></div>}
                <div className="tooltip-inner">
                    {tooltip}
                </div>
                {placement === 'bottom' && <div className="tooltip-arrow" style={{ position: 'absolute', transform: 'translate(0, 50%)'}}></div>}

            </div>
        )
        if (_onMouseEnter) {
            return _onMouseEnter(ev);
        }
    }
    const onMouseLeave = (ev: React.MouseEvent<HTMLButtonElement>) => {
        const { onMouseLeave: _onMouseLeave } = props;

        // setTooltip(null);
        if (_onMouseLeave) {
            return _onMouseLeave(ev);
        }
    }
    return (
        <>
            {placement === 'top' && _tooltip}
            <button {...props} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} type="button" className={classes} data-bs-toggle="tooltip" data-bs-placement={placement} title={tooltip}>
                {children}
            </button>
            {placement === 'bottom' && _tooltip}
        </>
    )
}

export default Tooltip;
