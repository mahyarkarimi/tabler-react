
import React, { Children, useEffect, useMemo, useState } from "react";
import { MultiSelectProps} from './types';
import { IconCaretDown } from '@tabler/icons-react';
import Input from "../Input";

const MultiSelect = ({
    className,
    style,
    options,
    name,
    size,
    placeholder,
    children,
    onChange
}: MultiSelectProps) => {

    const [dropDown, setDropDown] = useState('');
    const [selected, setSelected] = useState([]);

    const changeSelected = (ev) => {
        const { value } = ev.target;
        const index = selected.findIndex(v => v === value);
        if (index <= -1) {
            setSelected([...selected, value])
        } else {
            const newState = selected.slice().filter((v, i) => i !== index);
            setSelected([
                ...newState
            ])
        }
        onChange && onChange(selected);
    }

    const classes = useMemo(() => {
        return [
            'form-control',
            size && `form-control-${size}`,
            className
        ].filter(Boolean).join(' ');
    }, [className, size]);

    

    return (
        <div onClick={() => setDropDown(dropDown === '' ? 'show' : '')}>
            <Input className={`dropdown-toggle ${dropDown}`} placeholder={placeholder} />
            <div className={`dropdown-menu dropdown-menu-end ${dropDown}`} style={{width:'100%'}}>
                {options?.map(({ label, value }) => <label  style={{ cursor:'pointer'}} key={value} className="dropdown-item">
                    <input value={value} className="form-check-input m-0 me-2" type="checkbox" onChange={changeSelected}  />
                    {label}
                </label>)}
            </div>
            <span className="input-icon-addon" >
                <IconCaretDown />
            </span>
        </div>
        
    )
}

export default MultiSelect;
