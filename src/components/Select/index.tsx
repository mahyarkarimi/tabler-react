
import React, { useMemo } from "react";
import { SelectProps } from './types';
import { IconCaretDown } from '@tabler/icons';

const Select = ({
    className,
    style,
    options,
    size,
    onChange
}: SelectProps) => {
    const classes = useMemo(() => {

        return [
            'form-control',
            size && `form-control-${size}`,
            className
        ].filter(Boolean).join(' ');
    }, [className, size]);

    return (
        <div>
            <select style={style} onChange={onChange} className={classes}>
                {options?.map(({ label, value }) => <option value={value}>{label}</option>)}
            </select>
            <span className="input-icon-addon">
                <IconCaretDown />
            </span>

        </div>

    )
}

export default Select;
