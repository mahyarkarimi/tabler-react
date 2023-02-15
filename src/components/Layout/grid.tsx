import React, { HTMLAttributes } from "react";

const Grid: React.FC<HTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
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

export interface GridItemProps {
    title?: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps & HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    title,
    ...props
}) => {
    const classes = [
        'datagrid-item'
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {title && <div className="datagrid-title">{title}</div>}
            {children && <div className="datagrid-content">{children}</div>}
        </div>
    )
}
export default Grid;