
import React, { Children, useEffect, useMemo, useRef, useState } from "react";
import { AutoCompleteProps } from './types';
import { IconCaretDown } from '@tabler/icons';
import Input from "../Input";

const AutoComplete = ({
    className,
    style,
    options,
    name,
    size,
    placeholder,
    children,
    onSearch,
    onSelect,
    caseSensitive,
    onChange
}: AutoCompleteProps) => {

    const [dropDown, setDropDown] = useState('');
    const [filter, setFilter] = useState('');

    const filteredOptions = useMemo(() => options.filter(option => {
        if (caseSensitive) {
            return option.label.includes(filter) || option.value.includes(filter);
        } else {
            return option.label.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
                option.value.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
        }
    }), [options, filter, caseSensitive]);

    const classes = useMemo(() => {
        return [
            'form-control',
            size && `form-control-${size}`,
            className
        ].filter(Boolean).join(' ');
    }, [className, size]);

    const inputChange = (e) => {
        setFilter(e.target.value);
        onSearch && onSearch(e.target.value);
    }
    
    const onOptionSelected = (value, label) => {
        setFilter(label)
        onSelect && onSelect(value);
    }

    return (
        <div onClick={() => setDropDown(dropDown === '' ? 'show' : '')}>
            <Input className={`dropdown-toggle ${dropDown}`} placeholder={placeholder} value={filter} onChange={inputChange} />
            <div className={`dropdown-menu dropdown-menu-end ${dropDown}`} style={{width:'100%'}}>
                {filteredOptions?.map(({ label, value }) => <label style={{ cursor:'pointer'}} onClick={() => onOptionSelected(value, label)} key={value} className="dropdown-item">
                    {label}
                </label>)}
            </div>
            <span className="input-icon-addon" >
                <IconCaretDown />
            </span>
        </div>
        
    )
}

export default AutoComplete;
