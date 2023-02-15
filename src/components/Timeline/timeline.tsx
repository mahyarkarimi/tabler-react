import React, { HTMLAttributes } from "react";
import { Card } from "../Card";
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
        'timeline',
        simple && 'timeline-simple',
        className,
    ].filter(Boolean).join(' ');

    return (
        <ul {...props} className={classes}>
            {items.map((item, index) => (
                <li key={index} className='timeline-event'>
                    <div className={`timeline-event-icon ${item.color ? 'bg-'+item.color : ''}`}>
                        {item.icon}
                    </div>
                    <Card className="timeline-event-card" >
                        <div className="text-muted float-end">{item.time}</div>
                        <h4>{item.title}</h4>
                        <p className="text-muted">{item.description}</p>
                    </Card>
                    
                </li>
            ))}
        </ul>
    )
}

export default Timeline;
