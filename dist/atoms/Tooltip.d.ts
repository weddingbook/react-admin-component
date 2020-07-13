/// <reference types="react" />
import './Tooltip.scss';
declare type Props = {
    children: string | object;
    id: string;
    buttonType?: boolean;
};
declare const Tooltip: ({ children, id, buttonType }: Props) => JSX.Element;
export default Tooltip;
