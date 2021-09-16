import { ReactNode } from 'react';
import { ModalProps } from 'antd';
export interface confirmOptions extends ModalProps {
    title?: string;
    color?: string;
    content?: string | ReactNode;
}
/**
 * promise confirm
 * @param options
 * @returns {Promise<unknown>}
 */
export default function confirm(options: string | confirmOptions): Promise<void>;
