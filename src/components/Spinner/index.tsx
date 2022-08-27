import React, { useMemo } from 'react';

import { SpinnerProps } from './types';

const Spinner = ({
    role,
    className,
    color,
    size = 'default',
    children
}: SpinnerProps) => {

    const getSize = (s) => {
        switch(s){
            case 'large':
                return 'spinner-border-lg';
            case 'small':
                return 'spinner-border-sm';
            case 'default':
            default:
                return '';
        }
    }
    const classes = useMemo(() => {

        return [
            'spinner-border',
            color && `text-${color}`,
            getSize(size),
            className
        ].filter(Boolean).join(' ');
    }, [ color,className, size]);

    return (
        <input role={role} className={classes}>{children}</input>
    )
}

export default Spinner;
