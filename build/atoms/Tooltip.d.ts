/// <reference types="react" />
import './Tooltip.scss';
declare type Props = {
    children: string | object;
    id: string;
};
declare const Tooltip: ({ children, id }: Props) => JSX.Element;
export default Tooltip;
