
import React, { Children, useEffect, useMemo, useRef, useState } from "react";
import { AutoCompleteProps } from './types';
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
        const option = options.find(o => o.value === e.target.value);
        onSearch && option && onSearch(e.target.value, option);
    }
    
    const onOptionSelected = (value: string, label: string) => {
        setFilter(label);
        onSelect && onSelect(value, { value, label });
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
                <i className="ti ti-caret-down" />
            </span>
        </div>
        
    )
}

export default AutoComplete;
