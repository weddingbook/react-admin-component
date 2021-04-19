import { CSSProperties } from 'react';
import './Modal.scss';
declare type Props = {
    children?: object;
    style?: CSSProperties;
    title?: string;
    subTitle?: string;
    size?: 'small' | 'medium' | 'large';
    onClickInBackground?: () => void;
    cancelButtonComponent?: object;
    actionButtonComponent?: object;
    footerComponent?: object;
    withSection?: boolean;
    noScroll?: boolean;
};
declare const Tooltip: ({}: Props) => JSX.Element;
export default Tooltip;
