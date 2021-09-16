/// <reference types="react" />
import { PaginationProps } from 'antd';
export interface RAPaginationProps extends PaginationProps {
    disabled?: boolean;
    total?: number;
    pageNum?: number;
    pageSize?: number;
    pageSizeOptions?: [];
    onPageNumChange?: (pageNum: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    onChange?: (pageNum: number, pageSize: number) => void;
    showSizeChanger?: boolean;
    showQuickJumper?: boolean;
}
declare function RAPagination(props: RAPaginationProps): JSX.Element;
export default RAPagination;
