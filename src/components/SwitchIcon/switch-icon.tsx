import React, { HTMLAttributes, useMemo, useState } from "react";
import { Colors } from "../colors";

/**
 * @TODO needs state A and B other variations
 */
export interface SwitchIconProps extends HTMLAttributes<HTMLButtonElement>{
    anim?: 'fade' | 'scale' | 'flip' | 'slide-left' | 'slide-down' | 'slide-right';
    stateA: Colors | 'muted';
    stateB: Colors | 'muted';
    iconA: React.ReactNode
    iconB: React.ReactNode
    defaultActive?: boolean;
    onStateChange?: (state: boolean) => void;
}
const SwitchIcon = ({
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
}: SwitchIconProps) => {
    const [active, setActive] = useState(defaultActive);

    const classes = useMemo(() => {
        return [
            'switch-icon',
            anim && `switch-icon-${anim}`,
            active && 'active',
            className
        ].filter(Boolean).join(' ')
    }, [anim, active, className]);

    const classesA = useMemo(() => {
        return [
            'switch-icon-a',
            stateA && `text-${stateA}`
        ].join(' ');
    }, [stateA]);

    const classesB = useMemo(() => {
        return [
            'switch-icon-b',
            stateB && `text-${stateB}`
        ].join(' ');
    }, [stateB])

    const onButtonClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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