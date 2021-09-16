import { ReactNode } from 'react';
import './style.less';
export interface QueryBarProps {
    className?: string;
    prefixCls?: string;
    defaultCollapsed?: boolean;
    collapsedTips?: [ReactNode, ReactNode];
    showCollapsedBar?: boolean;
    children?: (collapsed: boolean) => ReactNode;
}
declare function QueryBar(props: QueryBarProps): JSX.Element;
declare namespace QueryBar {
    var defaultProps: {
        defaultCollapsed: boolean;
        showCollapsedBar: boolean;
        collapsedTips: string[];
    };
}
export default QueryBar;
