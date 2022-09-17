import React, { HTMLAttributes } from "react";
import { Colors } from "../colors";

export interface TimelineProps {
    items: {
        color?: Colors;
        icon?: React.ReactNode;
        time?: string;
        title: string;
        description: string | React.ReactNode;
    }[];
    simple?: boolean;
}

const Timeline: React.FC<TimelineProps & HTMLAttributes<HTMLUListElement>> = ({
    className,
    items,
    simple = false,
    ...props
}) => {
    const classes = [
        'list',
        'list-timeline',
        simple && 'list-timeline-simple',
        className,
    ].filter(Boolean).join(' ');

    return (
        <ul {...props} className={classes}>
            {items.map((item, index) => (
                <li key={index}>
                    <div className={`list-timeline-icon ${item.color ? 'bg-'+item.color : ''}`}>
                        {item.icon}
                    </div>
                    <div className="list-timeline-content">
                        <div className="list-timeline-time">{item.time}</div>
                        <p className="list-timeline-title">{item.title}</p>
                        <p className="text-muted">{item.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Timeline;
