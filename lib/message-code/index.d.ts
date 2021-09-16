/// <reference types="react" />
import { ButtonProps } from 'antd';
import './style.less';
export interface MessageCodeProps {
    value?: string;
    onChange?: () => void;
    time?: number;
    buttonType?: ButtonProps['type'];
    onSend?: () => boolean;
    placeholder?: string;
    wrapperProps?: Record<string, unknown>;
    buttonProps?: Record<string, unknown>;
    className?: string;
    prefixCls?: string;
}
declare function MessageCode(props: MessageCodeProps): JSX.Element;
declare namespace MessageCode {
    var defaultProps: {
        time: number;
        buttonType: string;
        wrapperProps: {};
        buttonProps: {};
        placeholder: string;
    };
}
export default MessageCode;
