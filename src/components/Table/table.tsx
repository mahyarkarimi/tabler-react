import React, { lazy, useEffect, useMemo, useRef, useState } from 'react';
import RcTable from 'rc-table';
import type { DefaultRecordType } from 'rc-table/lib/interface';
import { TableProps as TablerProps } from 'rc-table/lib/Table';
import { PaginationProps } from 'rc-pagination';
import { Button } from '../Button';
export type TableProps = TablerProps<DefaultRecordType> & {
    responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl',
    nowrap?: boolean
    vcenter?: boolean,
    dataSource: any[]
    paginator?: PaginationProps;
    paginatorPosition?: 'bottomLeft' | 'bottomRight' | 'bottomCenter';
}
const Pagination = lazy(() => import('rc-pagination'));

const Table = ({
    className,
    responsive = false,
    vcenter,
    nowrap,
    children,
    dataSource,
    paginator,
    paginatorPosition = 'bottomLeft',
    ...props
}: TableProps) => {
    const ref = useRef<HTMLDivElement>();
    const [page, setPage] = useState(0);

    useEffect(() => {
        const r = responsive && typeof responsive === 'boolean' ? 'table-responsive' : `table-responsive-${responsive}`;
        if (ref.current) {
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

    const dataToDisplay = useMemo(() => {
        if (paginator) {
            const { pageSize } = paginator;
            return dataSource.slice(page * pageSize, (page + 1) * pageSize);
        }
        return dataSource;
    }, [dataSource, paginator, page]);

    const paginatorStyles = useMemo(() => {
        switch(paginatorPosition){
            case 'bottomCenter':
                return { width: 'fit-content', marginInline: 'auto' };
            case 'bottomLeft':
                return { width: 'fit-content', marginLeft: '0', marginRight: 'auto' };
            case 'bottomRight':
                return { width: 'fit-content', marginLeft: 'auto', marginRight: '0' };
        }
    }, [paginatorPosition]);

    return (
        <div ref={ref}>
            <RcTable className={className} data={dataToDisplay} {...props} >
                {children}
            </RcTable>
            {paginator && <div style={{ width: '100%' }}>
                <Pagination style={paginatorStyles} {...paginator}
                    itemRender={(_page, type, el) => {
                        switch (type) {
                            case 'page':
                                return <Button mode='primary' size='small' {...(page + 1 != _page ? { outline: true } : {})} >{el}</Button>;
                            case 'next':
                                return <Button disabled={_page == page + 1} size='small' outline>›</Button>
                            case 'prev':
                                return <Button disabled={_page == page + 1} size='small' outline>‹</Button>
                            case 'jump-next':
                            case 'jump-prev':
                                return <Button size='small' outline>•••</Button>
                        }
                    }}
                    current={page + 1} onChange={(page, pageSize) => {
                        const { onChange } = paginator;
                        onChange && onChange(page, pageSize);
                        setPage(page - 1);
                    }} />
            </div>}
        </div>
    )
}
Table.Column = RcTable.Column;
Table.ColumnGroup = RcTable.ColumnGroup;
export default Table;
