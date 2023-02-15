import React, { HTMLAttributes, useState } from "react";
import { Colors } from "../colors";

/**
 * @TODO needs state A and B other variations
 */
export interface SwitchIconProps {
    anim?: 'fade' | 'scale' | 'flip' | 'slide-left' | 'slide-down' | 'slide-right';
    stateA: Colors;
    stateB: Colors;
    iconA: React.ReactNode
    iconB: React.ReactNode
    defaultActive?: boolean;
    onStateChange?: (state: boolean) => void;
}
const SwitchIcon: React.FC<SwitchIconProps & HTMLAttributes<HTMLButtonElement>> = ({
    anim,
    iconA,
    iconB,
    stateA,
    stateB,
    defaultActive = false,
    className,
    onClick,
    onStateChange,
    ...props
}) => {
    const [active, setActive] = useState(defaultActive);

    const classes = [
        'switch-icon',
        anim && `switch-icon-${anim}`,
        active && 'active',
        className
    ].filter(Boolean).join(' ');

    const classesA = [
        'switch-icon-a',
        stateA && `text-${stateA}`
    ].join(' ');

    const classesB = [
        'switch-icon-b',
        stateB && `text-${stateB}`
    ].join(' ');

    const onButtonClick = (ev) => {
        setActive(!active);
        onStateChange && onStateChange(!active);
        onClick && onClick(ev);
    }

    return (
        <button {...props} className={classes} data-bs-toggle="switch-icon" onClick={onButtonClick}>
            <span className={classesA}>
                {iconA}
            </span>
            <span className={classesB}>
                {iconB}
            </span>
        </button>
    )
}
export default SwitchIcon;