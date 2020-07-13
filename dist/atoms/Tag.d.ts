/// <reference types="react" />
import './Tag.scss';
declare type Props = {
    children: string;
    color: 'green' | 'red' | 'yellow';
};
declare const Tag: ({ children, color }: Props) => JSX.Element;
export default Tag;
