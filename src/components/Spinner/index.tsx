import React, { useMemo } from 'react';
import { Colors } from '../colors';

export interface SpinnerProps {
    color?: Colors;
    type: 'border' | 'grow' | 'dots';
    size?: 'sm' | 'default'
}
const Spinner = ({
    color,
    type = 'border',
    size = 'default',
}: SpinnerProps) => {

    const classes = useMemo(() => {
        return [
            type === 'border' && 'spinner-border',
            type === 'grow' && 'spinner-grow',
            type === 'dots' && 'animated-dots',
            color && `text-${color}`,
            size === 'sm' && 'spinner-border-sm'
        ].filter(Boolean).join(' ');
    }, [type])

    return (
        <div role='status' className={classes}></div>
    )
}

export default Spinner;
