import type { DefaultRecordType } from 'rc-table/lib/interface';
import { TableProps as TablerProps } from 'rc-table/lib/Table';
export type TableProps = TablerProps<DefaultRecordType> & {
    responsive: boolean | 'sm' | 'md' | 'lg' | 'xl',
    nowrap: boolean
    vcenter: boolean,
    dataSource?: []
}
