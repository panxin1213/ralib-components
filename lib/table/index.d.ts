/// <reference types="react" />
import { TableProps } from 'antd/es/table';
export interface RATableProps<RecordType> extends TableProps<RecordType> {
    fitHeight?: boolean;
    serialNumber?: boolean;
    serialNumberFixed?: boolean;
    serialText?: string;
    serialNumberWidth?: number;
    pageSize?: number;
    pageNum?: number;
    otherHeight?: number;
    offsetHeight?: number;
    borderBottom?: boolean;
    rowKey?: () => string;
}
export default function RATable<RecordType extends Record<string, unknown> = any>(props: RATableProps<RecordType>): JSX.Element;
