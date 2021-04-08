import { CSSProperties } from 'react';
import './ModalItem.scss';
declare type Props = {
    children?: object;
    style?: CSSProperties;
    className?: string;
};
declare const ModalItem: ({ children, className, style }: Props) => JSX.Element;
export default ModalItem;
