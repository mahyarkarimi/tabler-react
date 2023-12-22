import React, { HTMLAttributes, ReactNode, useMemo, useState } from "react"
import { Button, ButtonProps } from "../Button";
import { Colors } from "../colors";

export interface DropDownProps extends HTMLAttributes<HTMLDivElement> {
    buttonProps?: ButtonProps;
    header?: string;
    arrow?: boolean;
    menuItems?: {
        title: string;
        onClick: () => void;
        disabled?: boolean;
        leftNode?: ReactNode;
        rightNode?: ReactNode;
    }[];
    background?: Colors;
}

const DropDown = ({
    className,
    buttonProps,
    menuItems,
    header,
    arrow = false,
    background,
    ...props
}: DropDownProps) => {
    const baseId = (Math.random() * 100000).toPrecision();
    const [active, setActive] = useState<number>();
    const classes = useMemo(() => {
        return [
            'dropdown-menu',
            arrow && 'dropdown-menu-arrow',
            background && `bg-${background}`,
            className,
        ].filter(Boolean).join(' ');
    }, [className, arrow, background]);

    return (
        <div className='drop-down' {...props}>
            <Button dropDown {...buttonProps} />
            <div className={classes}>
                {header && <span className="dropdown-header">{header}</span>}
                {menuItems?.map(({ onClick, title, disabled, leftNode, rightNode }, index) => <div key={baseId + '-' +index} className={`dropdown-item ${active === index ? 'active' : ''} ${disabled ? 'disabled' : ''}`} onClick={() => {
                    if (!disabled) {
                        setActive(index);
                        onClick && onClick();
                    };
                }}>
                    {leftNode}
                    {title}
                    {rightNode}
                </div>)}
            </div>
        </div>
    )
}

export default DropDown;
