import React, { HTMLAttributes, useMemo } from "react";

const Grid = ({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => {
    const classes = [
        'datagrid',
        className
    ].filter(Boolean).join(' ');

    return (
        <div {...props} className={classes}>
            {children}
        </div>
    )
}

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
    gridTitle?: React.ReactNode;
}

export const GridItem = ({
    className,
    children,
    gridTitle,
    ...props
}: GridItemProps) => {
    const classes = useMemo(() => {
        return [
            'datagrid-item',
            className
        ].filter(Boolean).join(' ');
    }, [className]);

    return (
        <div {...props} className={classes}>
            {gridTitle && <div className="datagrid-title">{gridTitle}</div>}
            {children && <div className="datagrid-content">{children}</div>}
        </div>
    )
}
export default Grid;