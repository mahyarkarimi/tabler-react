import React, { HTMLAttributes } from 'react';

export interface EmptyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>{
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    action?: React.ReactNode;
}

const Empty = ({
    title,
    subtitle,
    action,
}: EmptyProps) => {

    return (
        <div className="empty">
            <div className="empty-icon">
                <i className='ti ti-mood-empty' />
            </div>
            <p className="empty-title">{title}</p>
            <p className="empty-subtitle text-secondary">
                {subtitle}
            </p>
            <div className="empty-action">
                {action}
            </div>
        </div>

    )

}

export default Empty;
