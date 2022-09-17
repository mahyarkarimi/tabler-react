import React, { useEffect, useRef } from 'react';
import RcTable from 'rc-table';
import type { DefaultRecordType } from 'rc-table/lib/interface';
import { TableProps as TablerProps } from 'rc-table/lib/Table';
export type TableProps = TablerProps<DefaultRecordType> & {
    responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl',
    nowrap?: boolean
    vcenter?: boolean,
    dataSource: any[]
}


const Table: React.FC<TableProps> = ({
    className,
    responsive = false,
    vcenter,
    nowrap,
    children,
    dataSource,
    ...props
}) => {
    const ref = useRef<HTMLDivElement>();
    useEffect(() => {
        const r = responsive && typeof responsive === 'boolean' ? 'table-responsive' : `table-responsive-${responsive}`;
        if(ref.current) {
            const tables = ref.current.querySelector('table');
            if (tables) {
                tables.className = [
                    'table',
                    r,
                    nowrap && 'table-nowrap',
                    vcenter && 'table-vcenter',
                ].filter(Boolean).join(' ');
            }
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
