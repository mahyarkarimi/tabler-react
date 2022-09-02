import React from "react";

export interface BreadcrumbProps {
    divider: 'dots' | 'arrows' | 'bullets' | 'default';
}
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    children,
    divider,
}) => {
    const classes = [
        'breadcrumb',
        ['arrows', 'dots', 'bullets'].includes(divider) && `breadcrumb-${divider}`
    ].filter(Boolean).join(' ');
    return (
        <ol className={classes} aria-label="breadcrumbs">
            {children}
        </ol>
    )
}

export interface BreadcrumbItemProps {
    active?: boolean;
}
export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
    children,
    active
}) => {
    return (
        <li className={`breadcrumb-item${active ? ' active': ''}`} {...(active && { "aria-current": "page"})}>
            <a href="#">{children}</a>
        </li>
    )
}

export default {
    Breadcrumb,
    BreadcrumbItem
}