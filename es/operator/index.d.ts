import { ReactNode } from 'react';
import { DropDownProps, PopconfirmProps } from 'antd';
import './style.less';
export interface OperatorProps {
    items: [
        {
            label?: ReactNode;
            icon?: string;
            visible?: boolean;
            disabled?: boolean;
            color?: string;
            loading?: boolean;
            isMore?: boolean;
            onClick?: () => void;
            confirm?: PopconfirmProps;
            statusSwitch?: Record<string, unknown>;
        }
    ];
    moreText?: ReactNode;
    moreContentWidth?: string | number;
    moreTrigger?: DropDownProps['trigger'];
    className?: string;
    prefixCls?: string;
}
declare function Operator(props: OperatorProps): JSX.Element;
declare namespace Operator {
    var defaultProps: {
        items: any[];
        moreText: JSX.Element;
        moreContentWidth: string;
        moreTrigger: string;
    };
}
export default Operator;
