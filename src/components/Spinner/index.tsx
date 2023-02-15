import React, { useMemo } from 'react';
import { Colors } from '../colors';

export interface SpinnerProps {
    color?: Colors;
    type: 'border' | 'grow' | 'dots';
    size?: 'sm' | 'default'
}
const Spinner: React.FC<SpinnerProps> = ({
    color,
    type = 'border',
    size = 'default',
}) => {

    const getSize = (s: string) => {
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
    const classes = [
        type === 'border' && 'spinner-border',
        type === 'grow' && 'spinner-grow',
        type === 'dots' && 'animated-dots',
        color && `text-${color}`,
        size === 'sm' && 'spinner-border-sm'
    ].filter(Boolean).join(' ');

    return (
        <div role='status' className={classes}></div>
    )
}

export default Spinner;
