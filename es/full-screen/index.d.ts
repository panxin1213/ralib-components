import { ReactNode } from 'react';
import { TooltipProps } from 'antd';
export interface FullScreenProps {
    placement?: TooltipProps['placement'];
    element?: HTMLElement;
    enterFullTip?: ReactNode;
    exitFullTip?: ReactNode;
    onFull?: () => void;
    onExit?: () => void;
    children?: (fullScreen?: boolean) => ReactNode;
}
export default function FullScreen(props: FullScreenProps): JSX.Element;
