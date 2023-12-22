import React, { HTMLAttributes, useMemo } from "react";
import { Colors } from "../colors";

export interface RibbonProps extends HTMLAttributes<HTMLDivElement> {
    position?: 'topStart' | 'topEnd' | 'bottomStart' | 'bottomEnd' | 'start' | 'end' | 'top' | 'bottom';
    color?: Colors;
    bookmark?: boolean;
}

const Ribbon = ({
    className,
    position,
    children,
    color,
    bookmark,
    ...props
}: RibbonProps) => {
    const getPosition = (p: typeof position) => {
        switch(p){
            case 'topStart': return 'ribbon-top ribbon-start';
            case 'topEnd': return 'ribbon-top ribbon-end';
            case 'bottomStart': return 'ribbon-bottom ribbon-start';
            case 'bottomEnd': return 'ribbon-bottom ribbon-end';
            case 'top': return 'ribbon-top';
            case 'bottom': return 'ribbon-bottom';
            case 'start': return 'ribbon-start';
            case 'end': return 'ribbon-end';
            default: return '';
        }
    }
    const classes = useMemo(() => {
        return [
            'ribbon',
            color && `bg-${color}`,
            position && getPosition(position),
            bookmark && 'ribbon-bookmark',
            className,
        ].filter(Boolean).join(' ');
    }, [color, position, bookmark, className]);

    return (
        <div {...props} className={classes}>
            {children}
        </div>
    )
}

export default Ribbon;