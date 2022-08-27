import React, { useEffect, useRef } from 'react';
import RcTable from 'rc-table';
import { TableProps } from './index.types';
const Table = ({
    className,
    responsive = false,
    vcenter,
    nowrap,
    children,
    dataSource,
    ...props
}: TableProps) => {
    const ref = useRef<Document>(null);
    useEffect(() => {
        const r = responsive && typeof responsive === 'boolean' ? 'table-responsive' : `table-responsive-${responsive}`;
        const tables = ref.current.querySelectorAll('table');
        if (tables && tables.length > 1) {
            tables[1].className = [
                'table',
                r,
                nowrap && 'table-nowrap',
                vcenter && 'table-vcenter',
            ].filter(Boolean).join(' ');
        }
    }, [responsive, nowrap, vcenter]);


    return (
        <div ref={ref}>
            <RcTable className={className} data={dataSource} {...props} >
                {children}
            </RcTable>
        </div>
       
    )
}
Table.Column = RcTable.Column;
Table.ColumnGroup = RcTable.ColumnGroup;
export default Table;
