import React, { HTMLAttributes, useMemo } from "react";

export interface BreadcrumbProps extends HTMLAttributes<HTMLOListElement> {
    divider?: 'dots' | 'arrows' | 'bullets' | 'default';
}
export const Breadcrumb = ({
    children,
    divider,
    ...props
}: BreadcrumbProps) => {
    const classes = [
        'breadcrumb',
        divider && ['arrows', 'dots', 'bullets'].includes(divider) && `breadcrumb-${divider}`
    ].filter(Boolean).join(' ');
    return (
        <ol {...props} className={classes} aria-label="breadcrumbs">
            {children}
        </ol>
    )
}

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
    active?: boolean;
}
export const BreadcrumbItem = ({
    children,
    active,
    ...props
}: BreadcrumbItemProps) => {
    return (
        <li {...props} className={`breadcrumb-item ${active ? 'active': ''}`} {...(active && { "aria-current": "page"})}>
            <a href="#">{children}</a>
        </li>
    )
}

export default {
    Breadcrumb,
    BreadcrumbItem
}